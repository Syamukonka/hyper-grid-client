import { combineReducers } from "redux";
import customer, {oneCustomer} from "./customer";
import admin from "./admin";
import transaction, {oneCustomerTxn, stats} from "./transaction";


export default combineReducers({
    customer, oneCustomer, admin, transaction, oneCustomerTxn, stats
})