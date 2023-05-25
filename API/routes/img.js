const express = require('express')
const {join} = require("path");
const imageRouter = express.Router();

module.exports = function (pool) {

    /**
     * Retrieve img
     * */
    imageRouter.get("/img/:type/:imgName", async function (req, res) {

        const imagePath = join(__dirname, '../' ,'public', 'img', `${req.params.type}`, `${req.params.imgName}`);
        res.sendFile(imagePath);
    })

    /**
     * Retrieve Logo by idEvent
     * */
    imageRouter.get("/avatar/:idEvent", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT id, content FROM photo WHERE id_event = ${req.params.idEvent} && type_photo = 'USER_LOGO'`);
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

    return imageRouter;
}
