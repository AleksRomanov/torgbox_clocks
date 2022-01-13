import {configureStore} from '@reduxjs/toolkit';
import offersReducer from './offers-reducer/offers-reducer';
import {apiReducer} from './api-reducer';
// import {redirect} from './middlewares/redirect';

export const store = configureStore({
  reducer: {
    offersReducer,
    [apiReducer.reducerPath]: apiReducer.reducer,
  },
  middleware: (gDM) => gDM({
    thunk: {
      extraArgument: apiReducer,
    }}).concat(apiReducer.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
