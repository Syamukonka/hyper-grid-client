import React from "react";
import {useNavigate} from "react-router-dom";

const ActionsRow = (props) => {

    const navigate = useNavigate();

    const onSearchChanged = (e) =>
    {
        const value = e.target.value;
        props.setSearchTerm(value)
    }

    return (
        <div className="row_between w100">
            <button onClick={()=>navigate("/customer/new")} className="btn btn-success bg_cool_green mg_r_sm ">
                New customer
            </button>
            <div className="col_top fillup">
                <div className=" row_right w100">
                    <input type="search" name="term" onChange={onSearchChanged} className="form-control fillup w_100 max_500" id="search"
                           placeholder="Search customer, by name or id" aria-describedby="search"/>
                    <button className="btn mg_l_sm bg_cool_green btn-success">Search</button>
                </div>
            </div>
        </div>
    )
}

export default ActionsRow;