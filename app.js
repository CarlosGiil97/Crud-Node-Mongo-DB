const mongoose = require('mongoose')

const url = 'mongodb://localhost/mongo_crud'

mongoose.connect(url, {

}).then(() => console.log('conectado a mongo'))
.catch( (e) => console.log('El error de conexión es'+e))