import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import LoginSlice from './features/Login'
const store = configureStore({
    reducer: {
        logIn : LoginSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
