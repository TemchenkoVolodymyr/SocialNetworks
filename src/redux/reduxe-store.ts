import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import ProfilePageReducer from "./profilePageReducer.ts";

import SidebarPageReducer from "./sidebarPageReducer.ts";
import UsersPageReducer from "./UsersPageReducer.ts";

import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import AppReducer from "./appReducer.ts";
import DialogPageReducer from "./dialogPageReducer.ts";
import AuthorizationReducer from "./AuthorizationReducer.ts";




let rootReducer = combineReducers({
    profilePage:ProfilePageReducer,
    dialogPage:DialogPageReducer,
    sidebar:SidebarPageReducer,
    usersPage:UsersPageReducer,
    authorization:AuthorizationReducer,
    app:AppReducer,
    form:formReducer,   // formReducer берем из redux-form , обьязательно должно быть form:formReducer , потому что redux-form будет искать в state именно поле с названием form

});

 type RootReducerType = typeof rootReducer;
 export type AppReducerType = ReturnType<RootReducerType> // это мы пишем если используем класс компонент или что бы задать тип стейта для thunk action


let store = createStore(rootReducer,applyMiddleware(thunk));  // добавляем applyMiddleware(thunk - импортируем из redux-thunk который установили npm i redux-thunk)
// Для того что бы можно было делать асинхронные запросы ( Если коректнее, но с помощю applyMiddleware мы получаем возможность в dispatch передевать функцию которая содержит группу action и запросы на сервер)
// @ts-ignore // ниже код этой строчки не будет учитываться TypeScriptom
export default store;