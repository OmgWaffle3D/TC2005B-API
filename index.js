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

const login = async () => {
    //Validate credentials
    const credentials = {
        username: username.value,
        password: password.value
    };

    const data = fetch("http://localhost:5000/login",
    {headers:{"content-type":"application/json"},body: JSON.stringify(credentials), })  
    console.log(username.value + " " + password.value);
    
    const user = await data.json();
    // If login is correct, redirect to profile page
    if (res.isLogin == true) {
        sessionStorage.setItem("name", "Aura");
        window.location = "./pages/profile.html";
    } else {
        // If login is incorrect, show error message
        alert("Login incorrecto");
    } 
};

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
// Middleware to parse JSON bodies  

boton.addEventListener("click", login);

