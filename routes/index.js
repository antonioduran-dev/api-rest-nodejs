// import express module
const express = require("express");
//create router
const router = express.Router();
const fs = require("fs");

const PATH_ROUTES = __dirname;// ruta absoluta

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if(name !== 'index'){
        router.use(`/${name}`, require(`./${file}`));
    }
});

//Export router
module.exports = router;