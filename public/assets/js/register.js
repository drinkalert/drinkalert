$(document).ready(function() {
    // Gets an optional query string from our url (i.e. ?user_id=23)
    var url = window.location.search;
    var userId;
    // Sets a flag for whether or not we're updating a user to be false initially
    var updating = false;
  
    // If we have this section in our url, we pull out the user id from the url
    // In localhost:8080/cms?user_id=1, userId is 1
    if (url.indexOf("?user_id=") !== -1) {
      userId = url.split("=")[1];
      getUserData(userId);
    }
  
    // Getting jQuery references to the user body, title, form, and category select
    var emailInput = $("#body");
    var titleInput = $("#title");
    var cmsForm = $("#cms");
    var userCategorySelect = $("#category");
    // Giving the userCategorySelect a default value
    userCategorySelect.val("Personal");
    // Adding an event listener for when the form is submitted
    $(cmsForm).on("submit", function handleFormSubmit(event) {
      event.preventDefault();
      // Wont submit the user if we are missing a body or a title
      if (!titleInput.val().trim() || !bodyInput.val().trim()) {
        return;
      }
      // Constructing a newUser object to hand to the database
      var newUser = {
        title: titleInput.val().trim(),
        body: bodyInput.val().trim(),
        category: userCategorySelect.val()
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
  
    // Submits a new user and brings user to blog page upon completion
    function submitUser(user) {
      $.user("/api/users/", user, function() {
        window.location.href = "/blog";
      });
    }
  
    // Gets user data for a user if we're editing
    function getUserData(id) {
      $.get("/api/users/" + id, function(data) {
        if (data) {
          // If this user exists, prefill our cms forms with its data
          titleInput.val(data.title);
          bodyInput.val(data.body);
          userCategorySelect.val(data.category);
          // If we have a user with this id, set a flag for us to know to update the user
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // Update a given user, bring user to the blog page when done
    function updateUser(user) {
      $.ajax({
        method: "PUT",
        url: "/api/users",
        data: user
      })
        .then(function() {
          window.location.href = "/blog";
        });
    }
  });
  