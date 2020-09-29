// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-sleep").on("click", function (event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newsleep");

    var eatBurger = {
      devoured: 1,
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: eatBurger,
    }).then(function () {
      console.log("changed burger to", newBurger);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: 0,
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new a Burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
