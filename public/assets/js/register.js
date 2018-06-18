$(document).ready(function() {
    // Gets an optional query string from our url (i.e. ?user_id=23)
    var url = window.location.search;
    var userId;
    // Sets a flag for whether or not we're updating a user to be false initially
    var updating = false;
    console.log('yolo register!')
    // If we have this section in our url, we pull out the user id from the url
    // In localhost:8080/cms?user_id=1, userId is 1
    if (url.indexOf("?user_id=") !== -1) {
      userId = url.split("=")[1];
      getUserData(userId);
    }
  
    // Getting jQuery references to the user body, title, form, and category select
    var emailInput = $("#email");
    var passwordInput = $("#password");
    var weightInput = $("#weight");
    var sexInput = $("#sex");
    var nameInput = $("#name")
    var userForm = $("#userForm");
    // Adding an event listener for when the form is submitted
    $(userForm).on("submit", function handleFormSubmit(event) {
      event.preventDefault();
      // Wont submit the user if we are missing a body or a title
      if (!emailInput.val().trim() || !passwordInput.val().trim()) {
        return;
      }
      // Constructing a newUser object to hand to the database
      var newUser = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        name: nameInput.val().trim(),
        sex: sexInput.val().trim(),
        weight: weightInput.val().trim(),
        // category: userCategorySelect.val()
      };
  
      console.log(newUser);
  
      // If we're updating a user run updateUser to update a user
      // Otherwise run submitUser to create a whole new user
      if (updating) {
        newUser.id = userId;
        updateUser(newUser);
      }
      else {
        submitUser(newUser);
      }
    });
  
    // Submits a new user and brings user to main page upon completion
    function submitUser(newUser) {
      console.log('im posting a new user')
      $.post("/api/users/", newUser, function(createdUser) {
        window.location.href = "/drink/" + createdUser.id;
      });
    }
  
    // Gets user data for a user if we're editing
    function getUserData(id) {
      console.log('im getting a user')
      $.get("/api/users/" + id, function(data) {
        if (data) {
          // If this user exists, prefill our user forms with its data
          nameInput.val(data.name);
          emailInput.val(data.email);
          passwordInput.val(data.password);
          // If we have a user with this id, set a flag for us to know to update the user
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // Update a given user, bring user to the main page when done
    function updateUser(user) {
      console.log('im updating a user')
      $.ajax({
        method: "PUT",
        url: "/api/users",
        data: user
      })
        .then(function() {
          window.location.href = "/main";
        });
    }
  });
  