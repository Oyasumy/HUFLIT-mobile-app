import { createStore, compose } from "redux";
import rootReducer from "../reducer/index";
// import createSagaMiddleware  from "redux-saga";
// import rootSaga from "../sagas";

const composeEnhancer =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

// const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  // const middleWares=[sagaMiddleware];
  // const enhancer=[applyMiddleware(...middleWares)];

  // const store=createStore(rootReducer,composeEnhancer(...enhancer));
  const store = createStore(rootReducer);

  // sagaMiddleware.run(rootSaga);

  return store;
};

export default configStore;
