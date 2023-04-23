import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FetchCustomers from "../actions/customer";

export default function Home(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(FetchCustomers())
    },[navigate,dispatch])
    const customers = useSelector(state => state.customer);

    return <div>
        <h1>Home</h1>
        <div>
            {
                customers!=null &&
                customers.map((customer,id)=>{
                    return <p key={id}>{customer.name}</p>
                })
            }
        </div>
    </div>
}