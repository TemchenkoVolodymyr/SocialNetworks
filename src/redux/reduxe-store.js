import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import ProfilePageReducer from "./profilePageReducer";

import SidebarPageReducer from "./sidebarPageReducer";
import UsersPageReducer from "./UsersPageReducer";
import AuthorizationReducer from "./AuthorizationReducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import AppReducer from "./appReducer";
import DialogPageReducer from "./dialogPageReducer";




let reduces = combineReducers({
    profilePage:ProfilePageReducer,
    dialogPage:DialogPageReducer,
    sidebar:SidebarPageReducer,
    usersPage:UsersPageReducer,
    authorization:AuthorizationReducer,
    form:formReducer,   // formReducer берем из redux-form , обьязательно должно быть form:formReducer , потому что redux-form будет искать в state именно поле с названием forme
    app:AppReducer,
})
let store = createStore(reduces,applyMiddleware(thunk));  // добавляем applyMiddleware(thunk - импортируем из redux-thunk который установили npm i redux-thunk)
// Для того что бы можно было делать асинхронные запросы ( Если коректнее, но с помощю applyMiddleware мы получаем возможность в dispatch передевать функцию которая содержит группу action и запросы на сервер)

export default store;