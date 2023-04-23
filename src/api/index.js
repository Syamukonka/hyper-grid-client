import axios from "axios"

const lh = "http://localhost:8088/"

const Axios = axios.create({baseURL:lh})

//Authorization
Axios.interceptors?.request.use( req => {
    const user = localStorage.getItem("user")
    if(user){
        req.headers.authorization = `Bearer ${JSON.parse(user).token}`
    }

    return req
})
export const signIn = (data) => Axios.post("login", data);

//Customers
export const fetchCustomers = () => Axios.get("customers");
export const addCustomer = (data) => Axios.post("customers", data);
export const getCustomer = (id) => Axios.get("customers/"+id);
export const deleteCustomer = (id) => Axios.delete("customers/"+id);
export const updateCustomer = (data) => Axios.put("customers",data);

//Transactions
export const fetchTransactions = () => Axios.get("transactions");
export const fetchTransactionsForId = (id) => Axios.get("transactions/"+id);
export const makePayment = (data) => Axios.post("transactions/pay",data);
