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

    return companyEvent;
}
