import ProfilePageReducer from "./profilePageReducer";
import DialogPageReducer from "./dialogPageReducer";
import SidebarPageReducer from "./sidebarPageReducer";

let store = {
    _state: {
        dialogPage: {
            dialogsItem: [
                {id: 0, name: "Vova"},
                {id: 1, name: "Sasha"},
                {id: 2, name: "Petro"},
                {id: 3, name: "Viktor"},
                {id: 4, name: "Feruza"}
            ],
            messageItem: [
                {text: "Hi,i have first work in my life", id: 0},
                {text: "Good afternoon", id: 1},
                {text: "Hi,i have first work in my life", id: 2},
                {text: "Good afternoon", id: 3},
                {text: "Hi,i have first work in my life", id: 4}
            ],
            newMessage: "",
        },
        profilePage: {
            postsData: [
                {
                    img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
                    message: "Hello, i want to go in my home",
                    like: 20
                },
                {
                    img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
                    message: "It`s my first comment",
                    like: 10
                },
                {
                    img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
                    message: "Hello, i want to go in my home",
                    like: 20
                },
                {
                    img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
                    message: "It`s my first comment",
                    like: 10
                },
                {
                    img: "https://th.bing.com/th/id/OIP.q3YWosr4nPpGqfHYbax2iAHaGv?pid=ImgDet&rs=1",
                    message: "Hello, i want to go in my home",
                    like: 20
                }
            ],
            newPostText: "",
        },
        sidebar: {
            friends: [
                {
                    img: "https://render.fineartamerica.com/images/rendered/square-dynamic/small/images/artworkimages/mediumlarge/1/sunset-over-barnegat-bay-rick-berk.jpg",
                    name: "Masha"
                },
                {
                    img: "https://moneyinc.com/wp-content/uploads/2020/08/shutterstock_509448862-750x500.jpg",
                    name: "Kolya"
                },
                {
                    img: "https://th.bing.com/th/id/OIP.3sNoynHzW_q3yBqFqzecAwHaGe?pid=ImgDet&w=800&h=700&rs=1",
                    name: "Vasya"
                },
            ],

        },
    },
    getState() {
        return this._state
    },
    rerenderTree() {
        console.log('')
    },
    subscribe(observer) {
        this.rerenderTree = observer;
    },
    dispatch(action) {

        ProfilePageReducer(this._state.profilePage, action)
        DialogPageReducer(this._state.dialogPage, action)
        SidebarPageReducer(this._state.sidebar, action)
        this.rerenderTree(this._state);
    }
}


export default store;