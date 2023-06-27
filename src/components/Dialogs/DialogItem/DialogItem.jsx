import React from "react";
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let toAddress = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <div className={s.wrapper__dialog}>
                <img
                    src="https://th.bing.com/th/id/R.7a5b8b8f2c06d86438fa0ca1d1a6e81e?rik=6mW1IbIQA718KQ&pid=ImgRaw&r=0"
                    alt="avatar"/>

                <NavLink to={toAddress}
                         className={navData => navData.isActive ? s.activeLink : s.dialog}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;