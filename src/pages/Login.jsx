import React from "react";
import {LoginForm} from "../components/LoginForm";

function Login(){
    return (
        <div className="container-xl">
            <div style={{height: "100vh"}} className="row pd_v_xl pd_h_lg">
                <div className="col-md-6 col-12">
                    <div className="col_center h100 rounded-2 text-light pd_md bg_cool_green">
                        <h2 style={{fontSize: "4rem"}} className="mg-sm genos text_center mg_b_xs">Hyper Grid Co.</h2>
                        <p> Lighting Up the Future of Smart Energy Solutions </p>
                        <i className="fa-solid fa-bolt text-warning mg_t_sm"></i>
                    </div>
                </div>
               <LoginForm/>
            </div>

        </div>
    )
}

export default Login;