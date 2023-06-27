import ProfilePageReducer, {
  setMyCurrentId,
  SetProfileStatus,
  SetUserProfile,
  ShowNewPostText
} from "../../redux/profilePageReducer";

let state = {
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
  profile:null,
  status:"",
  loginError : false,
  myCurrentId:"",

}

test('newPostText should be "Temchenko" ', () => {

  let action = ShowNewPostText("Temchenko")
  let newMessage = ProfilePageReducer(state, action)

  expect(newMessage.newPostText).toBe("Temchenko")
});

test('profile should be "HELLO" ', () => {

  let action = SetUserProfile("HELLO")
  let newProfile = ProfilePageReducer(state, action)

  expect(newProfile.profile).toBe("HELLO")
});

test('status should be "Everything alright"', () => {

  let action = SetProfileStatus("Everything alright")
  let newStatus = ProfilePageReducer(state, action)

  expect(newStatus.status).toBe("Everything alright")
});
test('myCurrentId should be 2', () => {

  let action = setMyCurrentId(2)
  let newId = ProfilePageReducer(state, action)

  expect(newId.status).toBe(2)
});
