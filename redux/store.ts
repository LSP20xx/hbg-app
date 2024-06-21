import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import identificationReducer from './slices/identificationSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    identification: identificationReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
