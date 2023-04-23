import { FETCH_CUSTOMERS } from "../constants/actions"

export default (data=[], action) => {
    
    switch(action.type){
        case FETCH_CUSTOMERS:
            return action.payload
        
        default:
            return data
    }
}