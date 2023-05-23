const express = require('express')
const eventRouter = express.Router();

module.exports = function (pool) {

    /**
     * Retrieve event by title
     * */
    eventRouter.get("/event/byTitle/:name", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT * FROM event WHERE title LIKE "${req.params.name}%"`);
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
     * Retrieve event by id
     * */
    eventRouter.get("/event/byId/:id", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT * FROM event WHERE id = "${req.params.id}"`);
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
     * Retrieve all event
     * */
    eventRouter.get("/event", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT * FROM event"`);
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
     * Retrieve latest event
     * */
    eventRouter.get("/event/limit", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT * FROM event ORDER BY start_date DESC LIMIT 5`);
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
     * Retrieve event by category
     * */
    eventRouter.get("/event/category/:name", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(
                `SELECT
                e.id,
                e.start_date,
                e.end_date,
                e.title,
                e.subtitle,
                e.description,
                c.name as Category,
                comp.name as Company,
                e.lat,
                e.lng
            FROM
                event e
            INNER JOIN category c ON
                c.id = e.id_category
            INNER JOIN company comp ON
                comp.id = e.id_company
            WHERE
                c.name = "${req.params.name}"`);
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
     * Retrieve ALL event by company ID
     * */
    eventRouter.get("/event/company/:id", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT * FROM event WHERE id_category = "${req.params.id}}"`);
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

    return eventRouter;
}
