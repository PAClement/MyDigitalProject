const express = require('express')
const friendshipRouter = express.Router();

module.exports = function (pool) {

    /**
     * Retrieve all friend from user
     * */
    friendshipRouter.get("/friendship/:id", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `SELECT
                        f.id,
                        f.date_relation_start,
                        u.firstname,
                        u.lastname,
                        u.birth_date,
                        u.lat,
                        u.lng
                        
                    FROM
                        friendship as f
                    LEFT JOIN user AS u
                    ON
                        u.id = f.id_user_friend
                    WHERE
                        f.id_user = ${req.params.id}`);
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

    return friendshipRouter;
}
