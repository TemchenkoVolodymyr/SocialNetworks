import React, {useState} from 'react';

const EditModeInput = (props) => {

  const {placeholder,callback,value,setValue} = props

  const changeValue = (e) => {
    setValue(e.target.value)
    if(callback){
      callback()
    }
  }



  return (
    <div>
      <input placeholder={placeholder} value={value} onChange={changeValue}/>
    </div>
  );
};

export default EditModeInput;