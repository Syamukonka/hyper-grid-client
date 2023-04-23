import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {SignIn} from "../actions/admin";
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const defaultForm = {username:"", password:""}
    const [form, setForm] = useState(defaultForm);

    const onFormChanged = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        setForm({...form, [field]:value})
    }

    const onSubmit = (e)=>{
        dispatch(SignIn(form,
            ()=>{
            navigate("/home");
            },
            (message)=>{
                alert(message)
            }))
    }

    return (
        <div className="col-md-6 col-12">
            <div className="w_100 h100 col_center">
                <div className="row_center mg_b_lg">
                    <h2>Login to continue</h2>
                </div>
                <div className="w_100 max_500">
                    <div className="mb-3">
                        <label htmlFor="uname" className="form-label"><i className="fa-solid fa-at mg_r_sm"></i>Username</label>
                        <input name="username" value={form.username} className="form-control" id="uname" type="text" onChange={onFormChanged}
                               placeholder="Enter your username"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label"><i className="fa-solid fa-key mg_r_sm"></i>Password</label>
                        <input type="password" name="password" value={form.password} className="form-control" id="pass" onChange={onFormChanged}
                               placeholder="Enter your password"/>
                    </div>

                    <p className="txt_xs text-success mg_b_md">Forgot password? come back when you
                        remember. </p>

                    <button onClick={onSubmit} className="btn w100 btn-success bg_cool_green">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )

}
