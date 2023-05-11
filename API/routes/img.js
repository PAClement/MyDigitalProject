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

    return imageRouter;
}
