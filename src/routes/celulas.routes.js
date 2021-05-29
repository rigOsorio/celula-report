import {routesCelula, routesUser} from '../controllers/index.js'

export default app => {

  // Create a new celula
  app.post("/celula", routesCelula.create);

  // Retrieve all celulas
  app.get("/celula", routesCelula.findAll);

  // Retrieve a single celula with celulaId
  app.get("/celula/:celulaId", routesCelula.findOne);

  // Update a celula with celulaId
  app.put("/celula/:celulaId", routesCelula.update);

  // Delete a celula with celulaId
  app.delete("/celula/:celulaId", routesCelula.delete);

  // Create a new celula
  app.delete("/celula", routesCelula.deleteAll);


  // Create a new user
  app.post("/user", routesUser.create);

  // Retrieve all users
  app.get("/user", routesUser.findAll);

  // Retrieve a single user with userId
  app.get("/user/one", routesUser.findRoleOne);

  // Retrieve a single user with userId
  app.get("/user/:userId", routesUser.findOne);

  // Update a user with userId
  app.put("/user/:userId", routesUser.update);

  // Delete a user with userId
  app.delete("/user/:userId", routesUser.delete);

  // Create a new user
  app.delete("/user", routesUser.deleteAll);
};