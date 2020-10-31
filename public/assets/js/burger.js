// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var borg = $(this).data("newburger");

    var newBurger = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurger
    }).then(
      function() {
        console.log("changed burger to", borg);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    if (!$("#ca").val().trim()) {
      $('[name=devoured]').append("<p>Please enter a burger name</p>");
      return
  };

  var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]").val().trim()
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
  }).then(
      function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
      }
  );
});

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
