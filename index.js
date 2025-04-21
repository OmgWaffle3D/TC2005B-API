import express from "express";
import indexRoutes from "./routes/index.route.js";

const app = express();

const port = 5000;

app.use(indexRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
// Middleware to parse JSON bodies  