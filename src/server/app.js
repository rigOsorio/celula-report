import express from 'express'
import '../routes/celulas.routes.js'

// Initializations
const app = express();
app.use(express.json());

//settings

//middlewares

//global variables

//routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to celula-report application." });
});

export default app 