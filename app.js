const express= require('express');
const app = express();
const mainRoutes= require ( './routes/mainRoutes');
app.use(express.static('./public'));


app.set('view engine', 'ejs');



app.use('/', mainRoutes);

app.listen(3000,()  => {
    console.log('esto fue exitoso');
     })


     // query string
     // cadena de texto que contiene informacion dinamica que se usa dentro de los controladores para 
     // hacer consultas de datos
     // https://www.localhost3000/products?long=es&categoria=historia
     // como puedo hacer yo para desde un controllador acceder a la informacion presente en un query string
     // esto se da con una propiedad en el controller llamada req.query

