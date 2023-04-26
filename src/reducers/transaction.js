import {FETCH_ALL_TXN, FETCH_STATS, FETCH_TXN, MAKE_TXN} from "../constants/actions";

export default (data=[],action) => {
    switch (action.type){

        case FETCH_ALL_TXN:
            return action.payload;

        default:
            return data;
    }
}

export const oneCustomerTxn = (data=[],action) => {
    switch (action.type){
        case FETCH_TXN:
            return action.payload;
        case MAKE_TXN:
            return [...data,action.payload];
        default:
            return data;
    }
}

export const stats = (data=[], action)=>{
    switch (action.type){
        case FETCH_STATS:
            return action.payload;
        default :
            return data;
    }
}