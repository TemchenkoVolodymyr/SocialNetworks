import React from 'react';
import s from "./NavigationBar.module.scss";
import {NavLink} from "react-router-dom";
const NavigationBar = (props) => {

  let {path,nameItem} = props

  return (
      <div className={s.item}>
        <NavLink to= {path}
                 className={navData => navData.isActive ? s.activeLink : s.item}>{nameItem}</NavLink>
      </div>


  );
};

export default NavigationBar;