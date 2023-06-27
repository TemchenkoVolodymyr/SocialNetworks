import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Loader from "./components/Loader/Loader";


class App extends React.Component {

    componentDidMount() {
       this.props.initializeApp()
    }
    render() {
       if(!this.props.initialization){
           return <Loader />
       }
        return (
          <BrowserRouter>
              <div className="grid-wrapper">
                  <HeaderComponent/>
                  <NavBarContainer/>
                  <div className="content-wrapper">
                      <Routes>
                          <Route path="/profile/:profileId?" element={<ProfileContainer/>}/>
                          <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                          <Route path="/news" element={<News/>}/>
                          <Route path="/musics" element={<Musics/>}/>
                          <Route path="/settings" element={<Settings/>}/>
                          <Route path="/users" element={<UsersContainer/>}/>
                          <Route path="/login" element={<Login/>}/>
                      </Routes>
                  </div>
              </div>
          </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        idUser: state.authorization.userId,
        initialization: state.app.initialization
    }
}
export default compose(
  connect(mapStateToProps, {initializeApp}) (App) );
