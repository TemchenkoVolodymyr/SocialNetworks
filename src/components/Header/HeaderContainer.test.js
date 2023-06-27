import AuthorizationReducer, {userDataLoginAction} from "../../redux/AuthorizationReducer";

let state = {
  userId: null,
  email: null,
  login: null,
};

test('userId should be 5 ', () => {

  let action = userDataLoginAction(5,"temchenko@gmail.com","Temchenko")
  let newMessage = AuthorizationReducer(state, action)

  expect(newMessage.userId).toBe(5)
});

test('email should be temchenko@gmail.com ', () => {

  let action = userDataLoginAction(5,"temchenko@gmail.com","Temchenko")
  let newId = AuthorizationReducer(state, action)

  expect(newId.email).toBe("temchenko@gmail.com")
});

test('login should be Temchenko', () => {

  let action = userDataLoginAction(5,"temchenko@gmail.com","Temchenko")
  let newId = AuthorizationReducer(state, action)

  expect(newId.login).toBe("Temchenko")
});
