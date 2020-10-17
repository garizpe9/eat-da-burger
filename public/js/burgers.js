  $(".submit").on("click", function (event) {
    ///update buttons so that clicks it is the devoured
    var id = $(this).data("id");
    var newBurger = $(this).data("newBurger");

    var eatBurger = {
      devoured: 1,
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: eatBurger,
    }).then(function () {
      console.log("changed burger to", newBurger);
      // Reload the page to get the updated list
      location.reload();
    });
  });


$("#addburger").on("click", function (event) {
  // Make sure to preventDefault on a submit event.

  event.preventDefault();
  console.log("hello");
  // var newburger = {
  //   name: $("#ca").val().trim(),
  //   devoured: 0,
  // };

  // // Send the POST request.
  // $.ajax("/api/burgers", {
  //   type: "POST",
  //   data: newburger,
  // }).then(function () {
  //   console.log("created new cat");
  // Reload the page to get the updated list
  location.reload();
  // });
});

