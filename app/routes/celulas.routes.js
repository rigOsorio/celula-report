module.exports = app => {
    const celula = require("../controllers/celula.controller.js");
    const user = require("../controllers/user.controller.js");
  
    // Create a new celula
    app.post("/celula", celula.create);
  
    // Retrieve all celulas
    app.get("/celula", celula.findAll);
  
    // Retrieve a single celula with celulaId
    app.get("/celula/:celulaId", celula.findOne);
  
    // Update a celula with celulaId
    app.put("/celula/:celulaId", celula.update);
  
    // Delete a celula with celulaId
    app.delete("/celula/:celulaId", celula.delete);
  
    // Create a new celula
    app.delete("/celula", celula.deleteAll);


    // Create a new user
    app.post("/user", user.create);
  
    // Retrieve all users
    app.get("/user", user.findAll);
  
    // Retrieve a single user with userId
    app.get("/user/one", user.findRoleOne);

    // Retrieve a single user with userId
    app.get("/user/:userId", user.findOne);
  
    // Update a user with userId
    app.put("/user/:userId", user.update);
  
    // Delete a user with userId
    app.delete("/user/:userId", user.delete);
  
    // Create a new user
    app.delete("/user", user.deleteAll);
  };