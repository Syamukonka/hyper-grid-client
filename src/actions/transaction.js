import {FETCH_TXN, MAKE_TXN} from "../constants/actions";
import {fetchTransactions, fetchTransactionsForId, makePayment} from "../api";

export const MakePayment = (form, onSuccess, onFailure) => async (dispatch) => {
    try{
        const {data} = await makePayment(form)
        console.log("RECIEVED:\n", data)
        if(data){
            dispatch({
                type: MAKE_TXN,
                payload: data}
            )

            onSuccess();
        }else onFailure("Failed to pay")
    }catch(error){
        console.log(error)
        onFailure(error?.message)
    }
}

export const FetchTransactionsForId = (id) => async (dispatch) => {
    try{
        const {data} = await fetchTransactionsForId(id)
        console.log("RECIEVED:\n", data)
        if(data){
            dispatch({
                type: FETCH_TXN,
                payload: data}
            )

        }
    }catch(error){
        console.log(error)
        //onFailure(error.response?.data?.message)
    }
}
export const FetchTransactions = () => async (dispatch) => {
    try{
        const {data} = await fetchTransactions()
        console.log("RECIEVED:\n", data)
        if(data){
            dispatch({
                type: FETCH_TXN,
                payload: data}
            )

        }
    }catch(error){
        console.log(error)
        //onFailure(error.response?.data?.message)
    }
}