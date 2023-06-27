import React from "react";
import s from "./Description.module.css";

const Description = (props) => {
    return (
        <div className={s.description}>
            <img src={props.url} alt="Description Avatar"></img>
            <div className={s.headerText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, hic vero omnis nostrum harum amet laboriosam recusandae cumque excepturi eos perferendis necessitatibus quod quas! Vero esse amet tempora in totam!</div>
        </div>
    )
}

export default Description;