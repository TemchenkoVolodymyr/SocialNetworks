import React from 'react';
import s from
    './CustomButton.module.scss'

const CustomButton = (props) => {

  const {name, callback} = props

  return (
    <>
      <button onClick={callback} className={s.hh}>{name}</button>
    </>
  );
};

export default CustomButton;