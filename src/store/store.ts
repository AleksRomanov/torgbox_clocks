import {configureStore} from '@reduxjs/toolkit';
// import timeZonesReducer from './timeZones-reducer/timeZones-reducer';
import {apiReducer} from './api-reducer';
// import {redirect} from './middlewares/redirect';

export const store = configureStore({
  reducer: {
    // timeZonesReducer,
    [apiReducer.reducerPath]: apiReducer.reducer,
  },
  middleware: (gDM) => gDM({
    thunk: {
      extraArgument: apiReducer,
    },
  }).concat(apiReducer.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
