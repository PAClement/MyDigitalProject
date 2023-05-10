const express = require('express')
const userRouter = express.Router();

module.exports = function (pool) {

    /**
     * Retrieve one user by is ID
     * */
    userRouter.get("/users/:id", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT * FROM user WHERE id=${req.params.id}`);
            res.send(JSON.stringify({
                status: 200,
                data: rows
            }));
        } catch (e) {
            res.send(e)
        } finally {
            if (conn) await conn.release(); // Libère la connexion après chaque requête
        }
    })

    /**
     * Route for register
     * */
    userRouter.post("/register", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const bodyUser = req.body;
            let test = Date.parse(req.body.birth_date);
            console.log(test)
            console.log(bodyUser)
            const rows = await conn.query("INSERT INTO `user` (`id`, `email`, `password`, `firstname`, `lastname`, `birth_date`, `lat`, `lng`)" +
                " VALUES (NULL,?,?,?,?,?,?)", Object.values(bodyUser));

            res.send(JSON.stringify({
                status: 200,
                data: rows
            }));
        } catch (e) {
            res.send(e);
        } finally {
            if (conn) await conn.release(); // Libère la connexion après chaque requête
        }
    })

    /**
     * Route connexion
     * */
    userRouter.post("/connection", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rowCheckUser = await conn.query("SELECT * FROM user WHERE email = ?", req.body.email)

            res.send(JSON.stringify(rowCheckUser.length > 0 ? {
                status: 200,
                data: rowCheckUser
            } : {
                status: 201,
                data: null
            }));
        } catch (e) {
            res.send(e);
        } finally {
            if (conn) await conn.release(); // Libère la connexion après chaque requête
        }
    })


    return userRouter;
}
