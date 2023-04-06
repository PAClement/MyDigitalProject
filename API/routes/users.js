const express = require('express')
const userRouter = express.Router();

module.exports = function (pool) {

    userRouter.get("/users", async function (req, res) {

        let conn;

        try{
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT * FROM user`);
            res.send(JSON.stringify(rows));
        }catch (e){
            res.send(e);
        } finally {
            if (conn) await conn.release(); // Libère la connexion après chaque requête
        }
    })

    userRouter.get("/users/:id", async function (req, res) {

        let conn;

        try{
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT * FROM user WHERE id=${req.params.id}`);
            res.send(JSON.stringify(rows));
        }catch (e){
            res.send(e)
        } finally {
            if (conn) await conn.release(); // Libère la connexion après chaque requête
        }
    })

    userRouter.post("/users", async function (req, res) {

        let conn;

        try{
            conn = await pool.getConnection();
            const bodyUser = req.body;
            const rows = await conn.query("INSERT INTO `user` (`id`, `email`, `password`, `firstname`, `lastname`, `birth_date`, `location`)" +
                " VALUES (NULL,?,?,?,?,?,?)", Object.values(bodyUser));

            res.send(JSON.stringify(rows));
        }catch (e){
            res.send(e);
        } finally {
            if (conn) await conn.release(); // Libère la connexion après chaque requête
        }
    })

    return userRouter;
}
