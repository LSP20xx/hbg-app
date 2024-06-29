import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import identificationReducer from './slices/identificationSlice';
import testReducer from './slices/testSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    identification: identificationReducer,
    test: testReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
      immutableCheck: false, 
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
