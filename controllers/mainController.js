const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/data.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    
     index: (req, res) => {
         return res.render ('index');
    },

    //detalleCatalogo:  (req, res) => {
      //  return res.render ('detalleCatalogo');
   //},
   detalleCatalogo: (req, res) => {
     let id = req.params.id
     let product = products.find(product => product.id == id)
     res.render('detalleCatalogo', {
         product,
         
     })
 },

    
    catalogo: function (req, res) {
        let products= [ 
            
             {id:1, title:"historia"},
             {id:2, title: "geografia"},
             {id:3, title:"matematica"},
             {id:4, title: "informatica"},
           
      ];

     res.render("catalogo", {products:products});
      }
       };

   // login: (req, res) => {
      //  return res.send ('Login');
      // },
   
   
    module.exports= controller;


    


















    //// tres comandos que nos van a permitir plasmar en nuestra base de datos la
    //// organizacion de nuestras tablas
    //// comando create table, comando drop table, comando alter table.
    /// en create hay que acclarar el nombre de la tabla, sus columnas con sus tipos  y sus contrains
    /// DROP - TABLE va a llevar solo el nombre de la tabla que queremos borrar
    /// ALTER TABLE: De los mas peculiares de los que vamos a ver ya que es muy sencible y va a realizar
    /// las modficaciones que le queremos hacer a la tabla. No es lo mismo agregar unca columna, 
    /// cambiar una columna, o simplemente cambiar un tipo de dato 