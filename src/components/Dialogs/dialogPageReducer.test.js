import dialogPageReducer, {AddNewMessageText, ShowNewMessageText} from "../../redux/dialogPageReducer";

let state = {

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

}
// сюда описываем действие которое должно произойти или не должно
test('length of the messageItem should be increment ', () => {

  let action = ShowNewMessageText("Vova here")
  let newMessage = dialogPageReducer(state, action)

  expect(newMessage.dialogsItem.length).toBe(5)

});

test('length of the dialogsItem should be increment ', () => {

  let action = AddNewMessageText(5)
  let newId = dialogPageReducer(state, action)

  expect(newId.messageItem.length).toBe(6)
});

//expect функция JEST , ее не надо импортировать , среда сама узнает expect и поймет что надо сделать
// в toBe передаем то что мы хотим увидить

