import React, { Component } from 'react'
import { connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import { reduxForm, Field, formValueSelector} from 'redux-form'

import {init} from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'




class BillingCycleForm extends Component {

    render() {

        const {handleSubmit, readOnly, credits, debts} = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component= {LabelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly}/>
                    <Field name='month' component={LabelAndInput} label='Mês' cols='12 4' placeholder='Informe o mês' readOnly={readOnly}/>
                    <Field name='year' component={LabelAndInput} label='Ano' cols='12 4' placeholder='Informe o ano' readOnly={readOnly}/>
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus={true}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits'),debts:selector(state, 'debts')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)