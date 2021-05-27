import celulaController from '../controllers/celula.controller.js'
import userController from '../controllers/user.controller.js'

export default app => {

  // Create a new celula
  app.post("/celula", celulaController.create);

  // Retrieve all celulas
  app.get("/celula", celulaController.findAll);

  // Retrieve a single celula with celulaId
  app.get("/celula/:celulaId", celulaController.findOne);

  // Update a celula with celulaId
  app.put("/celula/:celulaId", celulaController.update);

  // Delete a celula with celulaId
  app.delete("/celula/:celulaId", celulaController.delete);

  // Create a new celula
  app.delete("/celula", celulaController.deleteAll);


  // Create a new user
  app.post("/user", userController.create);

  // Retrieve all users
  app.get("/user", userController.findAll);

  // Retrieve a single user with userId
  app.get("/user/one", userController.findRoleOne);

  // Retrieve a single user with userId
  app.get("/user/:userId", userController.findOne);

  // Update a user with userId
  app.put("/user/:userId", userController.update);

  // Delete a user with userId
  app.delete("/user/:userId", userController.delete);

  // Create a new user
  app.delete("/user", userController.deleteAll);
};