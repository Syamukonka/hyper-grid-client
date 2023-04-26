import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DeleteCustomer, FetchCustomerById} from "../actions/customer";
import PayForm from "../components/PayForm";
import {TransactionsTable} from "../components/Tables";
import Banner from "../components/Banner";

const View = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const customer = useSelector(state => state.oneCustomer)
    useEffect(()=>{
        dispatch(FetchCustomerById(id,
            ()=>{},
            (message)=>{
                alert(message)
                navigate(-2)
            }))

    },[navigate, dispatch,id])

    const onDeleteClick = (id) => {
        dispatch(DeleteCustomer(id,
            ()=>{
                navigate(-1);
                alert("Deleted Successfully");
            },
            (error)=>{
                alert(error);
            }));
    }

    const onEditClick = ()=>{
        localStorage.setItem("editable",JSON.stringify(customer));
        navigate("/customer/edit/"+customer.id)
    }

    let typeIcon;
    console.log(customer);
    switch (customer.type) {
        case "Domestic":
            typeIcon = "fa-house";
            break;
        case "Commercial":
            typeIcon = "fa-store";
            break;
        case "Government":
            typeIcon = "fa-gavel";
            break;
        default :
            typeIcon = "fa-warning";
            break;
    }

    return (
        <div className="container">
            <Banner action={()=> navigate(-1)} actionText={"Back Home"} />
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className=" pd_sm col_center w100 mg_v_lg">
                        <div className="w_100 max_500 rounded-2 items_center shadow">

                            <div className="pd_t_md pd_h_md">
                                <div className="row_between no_wrap">
                                    <h4>
                                        {customer.name}
                                    </h4>
                                    <div className="row_right">
                                        <button onClick={()=>onEditClick()} className="btn btn-white mg_r_sm shaker_parent child"><i
                                            className="fa-solid fa-pen shake_once_child"></i></button>

                                        <button onClick={()=>onDeleteClick(customer.id)} className="btn btn-white shaker_parent"><i
                                            className="fa-solid fa-trash shake_once_child"></i></button>
                                    </div>
                                </div>
                                <p className="txt_sm mg_t_sm text-secondary"><i
                                    className="fa-solid txt_sm fa-location-dot mg_r_xs"></i>
                                    {customer.address}
                                </p>
                                <p className="txt_sm mg_t_sm text-success"><i
                                    className={"fa-solid txt_mn mg_r_xs "+typeIcon}>  </i>
                                    {customer.type}
                                </p>
                            </div>

                            <hr/>
                            <PayForm customer={customer} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className=" pd_sm col_center w100 mg_v_lg">
                        <div className="w_100 max_700 rounded-2 items_center shadow">
                            <TransactionsTable mode={"personal"} id={customer.id}/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default View;