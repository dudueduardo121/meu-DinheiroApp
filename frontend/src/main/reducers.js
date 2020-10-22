import {combineReducers} from 'redux'
import DashboardReducer from '../dashboard/dasboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../biliingCycle/billingCycleReducer'

const rootReducer = combineReducers ({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer