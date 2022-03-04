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
},{versionKey:false})

// Ahora se crea el modelo
const PersonaModel = mongoose.model('personas',personasSchema)

//Mostrar

const mostrar = async () => {
    const personas = await PersonaModel.find()
    console.log(personas)
}

const crear = async () => {
    const persona = new PersonaModel({
        nombre:'Alberto',
        edad : 25,
        pais:'España'
    })
    const resultado = await persona.save()
    console.log(resultado)
}

const actualizar = async (id) =>{
    const persona = await PersonaModel.updateOne({_id:id},
        {
            $set:{
              
                pais: 'España modificado'
            }
        }
        )
}

const eliminar = async (id) =>{
    const persona = await PersonaModel.deleteOne({_id:id})
    console.log(persona)
}



//mostrar()
//crear()
actualizar('62226dbb8e9a5f5f26b5c716')
eliminar('62226dbb8e9a5f5f26b5c716')