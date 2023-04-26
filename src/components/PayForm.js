import React, {useState} from "react";
import {getBillingRate} from "../constants/actions";
import {useDispatch} from "react-redux";
import {MakePayment} from "../actions/transaction";
import {fetchCustomers} from "../api";

const PayForm = (props) => {
    const {customer} = props;
    const {type} = customer;

    const rate = getBillingRate(type)

    const [form,setForm] = useState("");
    const [units,setUnits] = useState(0);
    const dispatch = useDispatch();
    const onFormChanged = (e) => {
        const value = e.target.value

        setForm(value.replaceAll("-",""));
        setUnits(value/rate);
    }

    const onSubmit = () => {
        const data = {
            customerId:customer.id,
            units:units,
            amount:form
        }

        if(data.amount > 0)
            dispatch(MakePayment(data,
                ()=>{
                    setForm("")
                    setUnits(0)
                    customer.units+=units;
                    dispatch(fetchCustomers())
                },
                (message)=>{

                }))
    }

    return (
        <div className="w100 pd_h_md pd_v_sm">
            <div className="row pd_md">
                <div className="col-12 ">
                    <div className="rounded-1 bg-ligh col_center items_center mg_r_xs pd_h_sm pd_v_md">
                        <h1>
                            { customer.units?.toFixed(2) }
                            <span><i className="txt_xs fa-solid">KWH</i></span></h1>
                        <p>AVAILABLE UNITS</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input name="amount" value={form} min={0} max={100_000} className="form-control" id="amount" type="number"
                           onChange={onFormChanged}/>
                </div>
                <div className="row_between items_center">
                    <button onClick={onSubmit} className="btn btn-sucess text-white bg_cool_green">
                        <i className="fa-solid fa-sack-dollar mg_r_xs"></i> Process payment
                    </button>
                    <div className="mg_l_lg col_top">
                        <p className="text-secondary txt_xs">ESTIMATED UNITS</p>
                        <h5 id="total">{units.toFixed(2)} <span className="txt_xs pd_b_xs fa">KWH</span></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayForm;