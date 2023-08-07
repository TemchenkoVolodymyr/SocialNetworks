import * as React from "react";
import  {useEffect, useState} from "react";


import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "../redux/appReducer.ts";
import Loader from "../components/Loader/Loader";
import RouterCollection from "./RouterCollection/RouterCollection";
import {UsersType} from "../types/types";
import   {DispatchType} from "../redux/appReducer";

function App () {

  interface InitializationStateType {
    app: {
      initialization: any
    }
  }
  const initializationSelector = (state : InitializationStateType) => state.app.initialization
  const initialization = useSelector(initializationSelector)


  const [isInit,setIsInit] = useState(false)
  const dispatch:DispatchType = useDispatch()

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
