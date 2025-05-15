import "dotenv/config";
import express from "express";

import cors from "cors";
import morgan from "morgan";

import indexRoutes from "./routes/index.route.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(usersRoutes)
app.use(indexRoutes);


const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

