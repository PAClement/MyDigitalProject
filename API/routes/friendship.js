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

    /**
     * ADD friend
     * */
    friendshipRouter.get("/addFriend/:userID/:friendID", async function (req, res) {

        let conn;
        const timestamp = Date.now();

        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `INSERT INTO \`friendship\`(\`id\`, \`date_relation_start\`, \`id_user\`, \`id_user_friend\`)
                            VALUES (null,"${formattedDate}",${req.params.userID},${req.params.friendID})`);
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
