//se importa mongo-base de datos para recursos humanos
const mongoose = require("mongoose");
const host = "localhost";
//Este es el puerto de mongo
const port = "27017";
//Decimos que es nuestra base de datos
const db = "hr"; 

//ahora se hace cadena de conexión
exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection);
              //nos conectamos a nuestra base de datos
              
              //verificamos si hay errores
    mongoose.Promise = global.Promise;
              //utilizamos una variable que almacene la informacion de esa bd
    const dbconnection = mongoose.connection;
              //si hay un error que muestre cuales
              //aqie el va a mostrar en consola el error
    dbconnection.on("error", console.error.bind(console, "error en la conexión de mongodb"))
}