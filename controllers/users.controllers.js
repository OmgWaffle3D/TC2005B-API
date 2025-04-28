import { json } from "express";
import { pool } from "../db/db.js";


export const login = (req, res) => {
    const { username, password } = req.body;
    pool.execute("SELECT * from users where username = ?", [username], (error, results) => {
        if (error) {
            res.status(500).json({msg: error, users: []});
            return;
        }
        if (results.length < 1) {
            res.status(401).json({isLogin: false, msg: "Unauthorized", users: []});
            return;
        }

        if (results[0].password === password) {
            res.status(200).json({msg: "OK", users: results});
        } else {
            res.status(401).json({isLogin: false, msg: "Unauthorized", users: []});
            return;
        }  


    });
};


export const getUsers = (req,res) => {
    pool.query('select * from users', (error, results) => {
    if (error) {
        // se puede utilizar tambien throw error
        res.status(500).json({msg: error, users: [] });
        return;
    }
    res.status(200).json({msg: "0k", users: results })
    // console.log("The solution is: ", results);
    });
};
export const getUser = (req,res) => {
    const id = req.params.id;
    pool.execute("select * from users where id = ?", [id], (error, results) => {
        if (error) {
            res.status(500).json({msg: error, users: [] });
            return;
        }
        res.status(200).json({msg: "0k", users: results })
        });
};

export const postUser = (req, res) => {
    const {name, age, username, password} = req.body;
    pool.execute("INSERT into users (name, username, password, age) values (?,?,?,?)", [name, username, password, age], (error, results) => {  
        if (error) {
            res.status(500).json({ msg: error, users: [] });
        }
    });

    pool.execute("SELECT * FROM users where username = ?", [username], (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: [] });
        }
        res.status(200).json({ msg: "OK", users: [] });
    });
};


export const putUser = (req, res) => {
    const {name, username, password, age} = req.body;
    pool.execute("UPDATE users set name = ?, username = ?, password = ?, age = ? where id = ?", 
    [name, username, password, age, req.params.id], (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: [] });
        }
        res.status(200).json({ msg: "OK", users: results });
    });
};
export const deleteUser = (req, res) => {
    pool.execute("DELETE from users where id = ?", [req.params.id], (error, results) => {
        if (error) {
            res.status(500).json({ msg: error, users: [] });
        }
        res.status(200).json({ msg: "OK", users: results });
    });

};
