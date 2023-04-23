import {ADD_CUSTOMER, DELETE_CUSTOMER, FETCH_CUSTOMERS, GET_CUSTOMER} from "../constants/actions"
import customer from "../actions/customer";

export default (data=[], action) => {


    switch(action.type){
        case FETCH_CUSTOMERS:
            return action.payload
        case DELETE_CUSTOMER:
            if(action.payload!==null)
                return data.filter(customer => customer.id!==action.payload?.id)
            else
                return data;

        default:
            return data
    }
}


export const oneCustomer = (data= {}, action) => {

    switch(action.type){
        case GET_CUSTOMER:
            return action.payload
        case ADD_CUSTOMER:
            return action.payload
        default:
            return data
    }

}