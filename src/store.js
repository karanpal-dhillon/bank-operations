import { createStore, combineReducers } from "redux";
import { accountReducer, deposit } from "./features/accounts/accountSlice";
import {
  customerReducer,
  createCustomer,
} from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

store.dispatch(createCustomer("John Doe", 12121212));
store.dispatch(deposit(300));

console.log(store.getState());
