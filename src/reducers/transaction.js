import {FETCH_ALL_TXN, FETCH_TXN, MAKE_TXN} from "../constants/actions";

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