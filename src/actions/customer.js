import { fetchCustomers} from "../api"
import { FETCH_CUSTOMERS } from "../constants/actions"

export const FetchCustomers = () => async (dispatch) => {
    try{
        const {data} = await fetchCustomers()
        console.log("RECIEVED:\n",data)
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

export default FetchCustomers;