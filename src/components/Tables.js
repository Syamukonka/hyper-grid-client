import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import FetchCustomers, {DeleteCustomer} from "../actions/customer";
import {FetchTransactions, FetchTransactionsForId} from "../actions/transaction";

export const CustomerTable = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchCustomers())
    },[navigate,dispatch])
    const customers = useSelector(state => state.customer);

    const {term} = props;
    return (
        <div>
        <div className="container-lg pd_h_md mg_v_lg">
            <table className="table  ">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer</th>
                    <th scope="col">ID</th>
                    <th scope="col">Units</th>
                    <th scope="col" className="text_right">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers!=null && !term ?
                    customers.map((customer,id)=>{
                        return <TableRow key={id} customer={customer} num={id}  />
                    })
                    :
                    customers.filter(customer =>
                        (
                            customer.name
                                .toLowerCase()
                                .search(term)>-1
                            ||
                            customer.id===parseInt(term)
                        )
                        ||
                        customer.type.toLowerCase()
                            .indexOf(term)===0
                    )
                    .map((customer,id)=>{
                        return <TableRow key={id} customer={customer} num={id}  />
                    })
                }
                </tbody>
            </table>
        </div>
    </div>
    )
}



const TableRow = (props) => {

    const {customer} = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onRowClick = (id)=> {
        navigate("/customer/"+id)
    }
    const onDeleteClick = (id) => {
        dispatch(DeleteCustomer(id,
            ()=>{
            },
            (error)=>{
                alert(error)
            }));
    }
    let typeIcon;
    switch (customer.type){
        case "Domestic": typeIcon="fa-house"; break;
        case "Commercial": typeIcon="fa-store"; break;
        case "Government": typeIcon="fa-gavel"; break;
        default : typeIcon="fa-warning"; break;
    }
    return (
        <tr className="shaker_parent shower_parent " >
            <th scope="row">{props.num}</th>
            <td className="cp" onClick={()=>onRowClick(customer.id)}>
                <div>
                    <p>{customer.name}</p>
                    <p className="mg_t_xs txt_mn fw700 text-secondary"><i
                        className={"fa-solid txt_mn mg_r_xs "+typeIcon}></i>
                        {customer.type}
                    </p>
                </div>
            </td>
            <td className=""><p>{customer.id}</p></td>
            <td className={customer.units > 100 ? " text-success ": (customer.units > 0 ? "text_amber " : " text-secondary ")} >
                <p className="fw700">{customer.units.toFixed(2)}<span className="mg_l_xs  fw700 txt_mn mg_b_xs">KWH</span></p>
            </td>
            <td className="">
                <div className="row_right no_wrap shower_child items_center">
                    <button className="btn shake_once_hover" onClick={()=>onRowClick(customer.id)}><i className="fa-solid fa-solid fa-arrow-up-right-from-square"></i></button>

                    <button className="btn shake_once_child" onClick={()=>onDeleteClick(customer.id)}><i className="fa-solid fa-trash text-danger"></i></button>

                </div>
            </td>
        </tr>

    )
}


export const TransactionsTable = (props) => {

    const {mode} = props;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(props.id)
            dispatch(FetchTransactionsForId(props.id))
        else
            dispatch(FetchTransactions())
    },[dispatch, props.id])

    const transactions = useSelector(state => mode==="personal"? state.oneCustomerTxn : state.transaction);


    return (

            <div className="pd_h_md">
                <h5 className="mg_v_md">Recent transactions</h5>
                <table className="table ">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">{mode==="personal"?"Date":"Customer"}</th>
                        <th scope="col">Paid</th>
                        <th scope="col" className="text_right">Units</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        transactions.map((transaction, id) => {
                            if(transaction!=null && props.id===transaction.customerId)
                                return <TxnTableRow key={id} transaction={transaction} mode={mode}/>
                        })
                    }
                    </tbody>
                </table>
            </div>
    )

}

const TxnTableRow = (props) => {
    const {transaction} = props;
    const {mode} = props;

    return (
        <tr className="shaker_parent shower_parent " >
            <th scope="row">{transaction.id}</th>
            <td className="cp" >
                <div>
                    <p>{mode==="personal" ? transaction.date : transaction.customerName}</p>
                    <p className="mg_t_xs txt_mn fw700 text-secondary"><i
                        className={"fa-solid txt_mn mg_r_xs fa-clock"}></i>
                        {mode==="personal" ? transaction.time : transaction.date+" - "+transaction.time}
                    </p>
                </div>
            </td>
            <td className=""><p>Rs. {transaction.amount}</p></td>
            <td className={transaction.units > 100 ? " text-success ": (transaction.units > 0 ? "text_amber " : " text-secondary ")} >
                <p className="fw700 text_right">{transaction.units?.toFixed(2)}<span className="mg_l_xs  fw700 txt_mn mg_b_xs">KWH</span></p>
            </td>
        </tr>
    )
}

