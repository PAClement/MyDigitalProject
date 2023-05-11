const express = require('express')
const categoryRouter = express.Router();

module.exports = function (pool) {

    /**
     * Retrieve all category
     * */
    categoryRouter.get("/category", async function (req, res) {

        let conn;

        try {
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT category.id, category.name,category.description, photo.content  
            FROM category LEFT JOIN photo on photo.id_category = category.id`);

            rows.forEach(target => {

                if(target.content != null ){
                    target.content = `/img/category/${target.content}`
                }
            })

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

    return categoryRouter;
}
