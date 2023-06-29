import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../../router/Layout";
import ProfileContainer from "../../components/Profile/ProfileContainer";
import DialogsContainer from "../../components/Dialogs/DialogsContainer";
import CurrentDialog from "../../components/Dialogs/CurrentDialog/CurrentDialog";
import News from "../../components/News/News";
import Musics from "../../components/Musics/Musics";
import Settings from "../../components/Settings/Settings";
import UsersContainer from "../../components/Users/UsersContainer";
import Login from "../../components/Login/Login";
import ShowAllFriends from "../../components/Nav/sideFriends/ShowAllFriends/ShowAllFriends";

const RouterCollection = () => {
  return (
   <>
     <BrowserRouter>
       <Routes>
         <Route path={'/'} element={<Layout/>}>
           <Route path="/profile/:profileId?" element={<ProfileContainer/>}/>
           <Route path="/dialogs/*" element={<DialogsContainer/>}/>
           <Route path='/dialogs/:key' element={<CurrentDialog/>} />
           <Route path="/news" element={<News/>}/>
           <Route path="/musics" element={<Musics/>}/>
           <Route path="/settings" element={<Settings/>}/>
           <Route path="/users" element={<UsersContainer/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/friends" element={<ShowAllFriends/>}/>
         </Route>
       </Routes>
     </BrowserRouter>
   </>
  );
};

export default RouterCollection;