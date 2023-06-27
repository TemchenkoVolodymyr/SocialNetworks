import React from "react";
import Header from "./Header";
import {useSelector} from "react-redux";



const HeaderContainer = () => {

  const isAuth = useSelector((state) => state.authorization.isAuth);
  const login = useSelector((state) => state.authorization.login)
  const idUser = useSelector((state) => state.authorization.userId)
  const photos = useSelector((state) => state.authorization.image)


  return (
    <>
      <Header isAuth={isAuth} login={login} idUser={idUser} photos={photos}/>
    </>
  )
}
export default HeaderContainer



