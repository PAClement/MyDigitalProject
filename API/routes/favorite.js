const express = require('express')
const favoriteRouter = express.Router();

module.exports = function (pool) {

    /**
     * Retrieve all user Fav event
     * */
    favoriteRouter.get("/favorite/userFAV/:id", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `SELECT
                        e.start_date,
                        e.end_date,
                        e.title,
                        e.subtitle,
                        c.name as category,
                        comp.name as company,
                        e.lat,
                        e.lng
                    FROM
                        favorite f
                    INNER JOIN event e ON
                        f.id_event = e.id
                    LEFT JOIN category c ON 
                    c.id = e.id_category
                    LEFT JOIN company comp ON 
                    comp.id = e.id_company
                    WHERE
                    f.type_fav = 'FAV' && f.id_user_fav = ${req.params.id}`);
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
     * Retrieve all user like event
     * */
    favoriteRouter.get("/favorite/userLIKE/:id", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `SELECT
                        e.start_date,
                        e.end_date,
                        e.title,
                        e.subtitle,
                        c.name as category,
                        comp.name as company,
                        e.lat,
                        e.lng
                    FROM
                        favorite f
                    INNER JOIN event e ON
                        f.id_event = e.id
                    LEFT JOIN category c ON 
                    c.id = e.id_category
                    LEFT JOIN company comp ON 
                    comp.id = e.id_company
                    WHERE
                    f.type_fav = 'LIKE' && f.id_user_fav = ${req.params.id}`);
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

    return favoriteRouter;
}
