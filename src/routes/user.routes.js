import { Router } from 'express'
import { routesUser } from '../controllers/index.js'

const router = Router();

// Create a new user
router.post("/user", routesUser.create);

// Retrieve all users
router.get("/user", routesUser.findAll);

// Retrieve a single user with userId
router.get("/user/one", routesUser.findRoleOne);

// Retrieve a single user with userId
router.get("/user/:userId", routesUser.findOne);

// Update a user with userId
router.put("/user/:userId", routesUser.update);

// Delete a user with userId
router.delete("/user/:userId", routesUser.remove);

// Create a new user
router.delete("/user", routesUser.deleteAll);

export default router;