import React, {useEffect, useState} from "react";
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "../redux/appReducer";
import Loader from "../components/Loader/Loader";
import RouterCollection from "./RouterCollection/RouterCollection";

function App () {

  const initialization = useSelector((state) =>  state.app.initialization)
  const [isInit,setIsInit] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeApp())

    if(initialization){
      setIsInit(true)
    }else{
      setIsInit(false)
    }
  },[initialization])



  if(!isInit){
    return <Loader/>
  }
  return (
    <>
      <RouterCollection></RouterCollection>
    </>
  )

}

export default App
