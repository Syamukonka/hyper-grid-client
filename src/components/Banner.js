import React from "react";


const Banner = (props)=>{
    return(
        <div className="container">
            <div className="col_center pd_t_md pd_h_md">
                <h1 className="genos"> Hyper Grid Co.</h1>
                <p className="mg_t_sm">Lighting Up the Future of Smart Energy Solutions</p>
                <i className="fa-solid fa-bolt text_amber mg_sm"></i>
                {
                    props.actionText &&
                    <button onClick={props.action}  className="btn btn-white"> <i
                        className="fa-solid fa-angle-left mg_r_sm"> </i> {props.actionText}</button>
                }
            </div>
        </div>
    )
}

export default Banner;