import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./RootReducer";

export const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose
    : compose;

const Store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default Store;
