const express= require('express');
const router= express.Router();

const mainController= require('../controllers/mainController'); 

router.get('/', mainController.index);

router.get ('/catalogo', mainController.catalogo);

router.get ('/detalleCatalogo/:id', mainController.detalleCatalogo);
//router.get ('/catalogo/:categoria', mainController.detalleCatalogo);
//router.get('/login', mainController.login);

module.exports= router;
