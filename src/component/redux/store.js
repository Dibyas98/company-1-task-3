import { configureStore } from "@reduxjs/toolkit";
import wareslice from "./wareslice";

export const store = configureStore({
    reducer:{
        ware: wareslice
    }
})