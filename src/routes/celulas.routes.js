import express from 'express'
import { routesCelula } from '../controllers/index.js'

const router = express.Router();
// Create a new celula
router.post("/celula", routesCelula.create);

// Retrieve all celulas
router.get("/celula", routesCelula.findAll);

// Retrieve a single celula with celulaId
router.get("/celula/:celulaId", routesCelula.findOne);

// Update a celula with celulaId
router.put("/celula/:celulaId", routesCelula.update);

// Delete a celula with celulaId
router.delete("/celula/:celulaId", routesCelula.remove);

// Delete all celulas
router.delete("/celula", routesCelula.deleteAll);


export default router;