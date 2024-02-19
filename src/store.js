import { createStore } from "redux";
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function deposit(amount) {
  return store.dispatch({ type: "account/deposit", payload: amount });
}

function withdraw(amount) {
  return store.dispatch({ type: "account/withdraw", payload: amount });
}

function requestLoan(amount, purpose) {
  return store.dispatch({
    type: "account/requestLoan",
    payload: { amount, purpose },
  });
}

function payLoan() {
  return store.dispatch({ type: "account/payLoan" });
}

store.dispatch(deposit(300));

console.log(store.getState());
