export const FETCH_CUSTOMERS = "fetch_customers";
export const GET_CUSTOMER = "get_customer";
export const DELETE_CUSTOMER = "get_customer";
export const ADD_CUSTOMER = "add_customer";
export const SIGN_IN = "sign_in";
export const FETCH_TXN = "fetch_customer_transactions";
export const MAKE_TXN = "make_transaction";
export const FETCH_ALL_TXN = "fetch_all_transactions";


//CUSTOMER AND TYPES
export const GOV = "Government"
export const DOM = "Domestic"
export const COM = "Commercial"
export const GOV_RATE = 2.0;
export const DOM_RATE = 2.4;
export const COM_RATE = 3.0;

export const getBillingRate = (type) => {
    switch (type){
        case GOV:
            return GOV_RATE;
        case DOM:
            return DOM_RATE;
        case COM:
            return COM_RATE;
        default :return 10;
    }
}