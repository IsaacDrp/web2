import express from "express";
import inicio from "./routes/inicio_router.js";


//crea la aplicacion
const app = express(); //como esa variable no va a cambiar, la hacemos constante

app.use(express.urlencoded({extended:true}));


//pug
app.set("view engine", "pug");
app.set("views", "./views");

//carpeta publica
app.use(express.static("public"));

//routing
app.use("/", inicio) //si se lee una diagonal, me manda el controlador a inicio

//definir el puerto

const port = 2000;

app.listen(port, () => {
    console.log(`Esperando peticiones en el puerto ${port}`)
});