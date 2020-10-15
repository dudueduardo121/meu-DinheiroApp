const BillingCycle = require('./billingCycle')

//methods
BillingCycle.methods(['get', 'post', 'put', 'delete'])
// Sempre que o objeto for alterado retorna o objeto atualizado
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if(!err) {
            res.json(docs)
        }else {
            res.status(500).json({errors: [error]})
        }
    })
})

module.exports = BillingCycle