const Empleado = require("../models/empleados.model");
//variable
let response = {
    msg : "",
    //variable cuando sea un exito-variable es true
    exito: false
}

exports.create = function(req, res){
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion

    })
    //puede guardar o ocurrir unn error
     empleado.save(function(err){
         if(err){
         console.log = false,
         response.exito = false, 
         response.msg = "error al guardar el empleado"
         //enviar esto en json- res es la respuesta
         res.json(response)
         return;
     }
     //cuando esta bien el registro= true
     response.exito = true,
     response.msg = "el empleado se guardó correctamente"
     res.json(response)
     //aca no nececito que me retorne nada porque no hay error
})
}

