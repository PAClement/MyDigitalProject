const express = require('express')
const companyEvent = express.Router();

module.exports = function (pool) {

    /**
     * Retrieve company by id
     * */
    companyEvent.get("/company/:id", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT * FROM company WHERE id = "${req.params.id}"`);
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
     * Route connexion
     * */
    companyEvent.post("/company/connection", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rowCheckUser = await conn.query("SELECT * FROM company WHERE email = ? && password = ?", [req.body.email, req.body.password])

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

    return companyEvent;
}
