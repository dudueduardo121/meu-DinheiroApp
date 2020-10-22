const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/meudinheiro', { useNewUrlParser: true })


/* mongoose.connection.dropDatabase(); */

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite mínimo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o atributo '{PATH}'."