const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

//methods
BillingCycle.methods(['get', 'post', 'put', 'delete'])
// Sempre que o objeto for alterado retorna o objeto atualizado
BillingCycle.updateOptions({new: true, runValidators: true})

// aplicar o tratamento de erro
BillingCycle.after('post', errorHandler).after('put', errorHandler)



BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, value) => {
        if(!err) {
            res.json(value)
        }else {
            res.status(500).json({errors: [error]})
        }
    })
})

// rota que conta a qunatidade de registros 
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        }else {
            res.json({value})
        }
    })
})

// rota Sumario de ciclos de pagamento
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})


module.exports = BillingCycle