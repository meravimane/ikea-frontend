import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { detailsReducer } from "../Features/ProductDetails/reducer";
import { cartReducer } from "../Features/Cart/reducer";

const rootReducer = combineReducers({
  detailsReducer: detailsReducer,
  cartReducer: cartReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
