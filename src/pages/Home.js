import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FetchCustomers from "../actions/customer";
import {StatsCard} from "../components/StatsCard";
import {CustomerTable} from "../components/Tables";
import ActionsRow from "../components/ActionsRow";

export default function Home(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("admin"));
    
    useEffect(()=>{
        dispatch(FetchCustomers())
    },[navigate,dispatch])
    const customers = useSelector(state => state.customer);

    return <div>
        <div className="container-lg pd_v_sm border-bottom-white">
            <div className="row_between">
                <div className="">
                    <h1 className="genos"> Hyper Grid Co.</h1>
                    <p className="">Lighting Up the Future of Smart Energy <i
                        className="fa-solid fa-bolt text_amber mg_sm"></i></p>
                </div>
                <div>
                    <a href="/login" className="btn fw500">Logout <i
                        className="mg_l_sm fa-solid fa-arrow-right-from-bracket "></i></a>
                </div>
            </div>
            <hr/>
        </div>

        <div className="container-lg pd_t_md pd_b_lg">
            <p className="">welcome,</p>
            <h3 className="">{user.name}</h3>
            <i>{user.role && user.role}</i>
        </div>


        <div className="container-lg pd_h_md mg_t_sm ">
            <div className="row mg_t_md ">
                <div className="col-6 col-sm-3">
                    <div className=" col_top items_start pd_md bg_light1 h100 rounded-1">

                    </div>
                </div>
                <div className="col-6 col-sm-3 ">
                    <StatsCard value={customers.length} caption={"CUSTOMERS"}  info={"All registered customers"} infoIcon={"fa-people-group"}/>
                </div>
                <div className="col-6 col-sm-3 ">
                    <StatsCard value={"23,000"} caption={"POWER SUPPLIED"} suffix={"KWH"} info={"From the past 30 days"} infoIcon={"fa-clock"}/>
                </div>
                <div className="col-6 col-sm-3">
                    <StatsCard value={"430,000"} caption={"REVENUE"} prefix={"Rs."} info={"From the past 30 days"} infoIcon={"fa-clock"} />
                </div>
            </div>
        </div>

        <div className="bg_light1">

            <div className="container-lg pd_h_md pd_v_lg mg_t_lg">
                <ActionsRow/>
                <CustomerTable />
            </div>
        </div>
    </div>
}