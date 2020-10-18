const db = require("../models");

module.exports = function (app) {
  app.get("/api/burger/", function (req, res) {
      db.burger.findAll({}).then(function (data) {
        res.json(data);
      });
  });

  app.get("/api/burger/:id?", function(req,res){
      db.burger.findOne({
          where: {
            id:  req.params.id
          },
      }).then(function (data) {
          console.log(data);
          return res.json(data)
      })
  });

  app.get("/api/burger/:id?", function(req,res){
      db.burger.findOne({
          where: {
            id:  req.params.id
          },
      }).then(function (data) {
          console.log(data);
          return res.json(data)
      })
  });

  app.put("/api/burger", function(req, res) {
    db.burger.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  
}
