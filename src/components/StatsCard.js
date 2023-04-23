import React from "react";

export const StatsCard = (props) => {
    return (
        <div className="shadow h100 col_top items_start pd_md border border-secondary-subtle rounded-1">
            <h1>
                <span className={"txt_sm mg_r_sm"}>{props.prefix}</span>
                {props.value}
                <span className={"txt_sm mg_l_sm"}>{props.suffix}</span>
            </h1>
            <p className="text-secondary mg_t_sm">{props.caption}</p>
            <p className="txt_xs text-success">
                <i className={"mg_r_sm fa-solid "+props.infoIcon}></i>
                {props.info}
            </p>
        </div>
    )
}