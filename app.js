const mongoose = require('mongoose')

const url = 'mongodb://localhost/mongo_crud'

mongoose.connect(url, {

}).then(() => console.log('conectado a mongo'))
.catch( (e) => console.log('El error de conexión es'+e))


// Crear el esquema de la DB
const personasSchema = mongoose.Schema({
    nombre : String,
    edad : Number,
    pais : String
})

// Ahora se crea el modelo
const PersonaModel = mongoose.model('personas',personasSchema)

//Mostrar

const mostrar = async () => {
    const personas = await PersonaModel.find()
    console.log(personas)
}

mostrar()