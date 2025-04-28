import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.route.js";
import usersRoutes from "./routes/users.routes.js";





const app = express();


app.use(express.json());
app.use(usersRoutes)
app.use(indexRoutes);


const port = 5000;


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
// Middleware to parse JSON bodies  