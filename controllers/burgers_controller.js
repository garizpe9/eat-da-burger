var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    //calls to burger.js to get the function for ORM and creates into JSON
    var hbsObject = {
      burger_name: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//This would post the information that is in the submit button for the burger and would also show the burgers in this url
router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devour],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

//This would show the burgers with the speicic id on the page if navigated to that url and would also update selected burgers based on ID
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devour: req.body.devour,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
