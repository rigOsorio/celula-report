import express from 'express'
import celulas from '../routes/celulas.routes.js'
import users from '../routes/user.routes.js'

// Initializations
const app = express();
app.use(express.json());

//settings

//middlewares

//global variables

//routes
app.use(celulas);
app.use(users);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to celula-report application." });
});

export default app 