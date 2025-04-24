import { pool } from "../db/db.js";


export const getUsers = async (req, res) => {
    pool.query("SELECT * FROM users", (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: [] });
        }
        res.status(200).json({ msg: "OK", users: [] });
    });
};

export const getUser = async (req, res) => {
    const id = req.params.id;
    pool.query("SELECT * FROM users where id = ? ", [id], (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: [] });
        }
        res.status(200).json({ msg: "OK", users: [] });
    });
};

export const postUser = (req, res) => {
    res.send ("Hello from the API 5");
};
export const putUser = (req, res) => {
    res.send ("Hello from the API 6");
};
export const deleteUser = (req, res) => {
    res.send ("Hello from the API 7");
};
export const login = (req, res) => {
    res.send ("Hello from the API 8");
};
