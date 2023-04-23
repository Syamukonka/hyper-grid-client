import {addCustomer, deleteCustomer, fetchCustomers, getCustomer} from "../api"
import {ADD_CUSTOMER, DELETE_CUSTOMER, FETCH_CUSTOMERS, GET_CUSTOMER} from "../constants/actions"

export const FetchCustomers = () => async (dispatch) => {
    try{
        const {data} = await fetchCustomers()
        console.log("RECIEVED:\n", data)
        if(data){
            dispatch({
                type: FETCH_CUSTOMERS,
                payload: data}
                )
            
        }
    }catch(error){
        console.log(error)
        //onFailure(error.response?.data?.message)
    }
}

export const FetchCustomerById = (id) => async (dispatch) => {
    try{
        const {data} = await getCustomer(id)
        console.log("RECIEVED:\n", data)
        if(data){
            dispatch({
                type: GET_CUSTOMER,
                payload: data}
            )

        }
    }catch(error){
        console.log(error)
        //onFailure(error.response?.data?.message)
    }
}

export const AddNewCustomer = (form, onSuccess, onFailure) => async (dispatch) => {
    try{
        const {data} = await addCustomer(form)
        console.log("RECIEVED:\n", data)
        if(data){
            dispatch({
                type: ADD_CUSTOMER,
                payload: data}
            )
            onSuccess(data);
        }
        else onFailure("Failed to add new customer");
    }catch(error){
        console.log(error)
        onFailure(error?.message)
    }
}
export const DeleteCustomer = (id) => async (dispatch) => {
    try{
        const {data} = await deleteCustomer(id)
        console.log("RECIEVED:\n", data)
        if(data){
            dispatch({
                type: DELETE_CUSTOMER,
                payload: {id}}
            )

        }
    }catch(error){
        console.log(error)
        //onFailure(error.response?.data?.message)
    }
}
export default FetchCustomers;