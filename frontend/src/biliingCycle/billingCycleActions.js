import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import { reset as resetForm, initialize} from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}


export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

function submit(values, method) {
    return dispatch => {

        const id = values._id ? values._id : ''

        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}

// criar novo clico de pagamento
export function create(values) {
    return submit(values, 'post')

}

// Atualizar ciclo de pagamentos 
export function update(values) {
    return submit(values, 'put')
}



// iniciliazar ciclo de pagamentos com valor inicial definido
export function showUpdate(billingClycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingClycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}