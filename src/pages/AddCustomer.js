import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AddNewCustomer} from "../actions/customer";

const AddCustomer = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const defaultForm = {name:"",address:"",type:"Domestic"};
    const [form,setForm] = useState(defaultForm);
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    const onFormChanged = (e) => {
        const value = e.target.value;
        const field = e.target.name;

        setForm({...form,[field]:value})

    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(AddNewCustomer(form,
            (data)=>{
                setSuccess("Successfully added "+data.name);
                setForm(defaultForm)
            },
            (message)=>{
                setError(message);
            }))

    }

    return (
        <div className="container">
            <div className=" pd_sm col_center w100 mg_v_lg">
                <div className="w_100 max_500 rounded-1 items_center shadow">
                    <h3 className="text_center mg_t_md mg_h_md">Add a new Customer</h3>
                    <hr className="mg_b_0"/>
                    {
                        error &&
                        <div className="pd_md bg-danger-subtle">
                            <p className="text_amber"><i className="fa-solid fa-warning mg_r_sm"> </i>{error}</p>
                        </div>
                    }
                    {
                        success &&
                        <div className="pd_md bg-success-subtle">
                            <p className="text-success"><i className="fa-solid fa-check-circle mg_r_sm "></i>{success}</p>
                        </div>
                    }

                    <form className="w100 pd_md">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input name="name" value={form.name} required onChange={onFormChanged} className="form-control" id="name" type="text"
                                   placeholder="Customer's full name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input name="address" value={form.address} required onChange={onFormChanged} type="text" className="form-control" id="address"
                                   placeholder="Home address of the customer"/>
                        </div>
                        <label className="form-label">Customer category</label>
                        <div className="mb-3 form-floating">
                            <select value={form.type} onChange={onFormChanged} className="form-select" id="floatingSelect" name="type"
                                    aria-label="Floating label select example">
                                <option value="Domestic">Domestic</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Government">Government</option>
                            </select>
                            <label htmlFor="floatingSelect">This customer is </label>
                        </div>
                        <div className="row_right">
                            <button type="submit" onClick={onSubmit} className="btn btn-success bg_cool_green">Add {success ? "another customer" : "new customer"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default AddCustomer;