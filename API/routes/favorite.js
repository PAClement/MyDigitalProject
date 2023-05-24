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

    /**
     * ADD user like event
     * */
    favoriteRouter.get("/addUserLIKE/:userID/:eventID", async function(req, res){
        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `INSERT INTO \`favorite\`(\`id\`, \`id_user_fav\`, \`id_event\`, \`type_fav\`)
                        VALUES (null,${req.params.userID},${req.params.eventID},'LIKE')`);
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
     * DELETE user like event
     * */
    favoriteRouter.delete("/deleteUserLIKE/:userID/:eventID", async function(req, res){
        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `DELETE FROM \`favorite\` WHERE \`id_user_fav\` = ${req.params.userID} && \`id_event\` = ${req.params.userID} && \`type_fav\` = 'LIKE'`);
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
     * ADD user FAV event
     * */
    favoriteRouter.get("/addUserFAV/:userID/:eventID", async function(req, res){
        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `INSERT INTO \`favorite\`(\`id\`, \`id_user_fav\`, \`id_event\`, \`type_fav\`)
                        VALUES (null,${req.params.userID},${req.params.eventID},'FAV')`);
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
     * DELETE user FAV event
     * */
    favoriteRouter.delete("/deleteUserFAV/:userID/:eventID", async function(req, res){
        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `DELETE FROM \`favorite\` WHERE \`id_user_fav\` = ${req.params.userID} && \`id_event\` = ${req.params.userID} && \`type_fav\` = 'FAV'`);
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
