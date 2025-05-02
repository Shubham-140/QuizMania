import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../features/ColorSlice";
import userChoicesReducer from "../features/UserChoicesSlice";
import performanceReducer from "../features/PerformanceInfoSlice";

const store = configureStore({
    reducer: {
        color: colorReducer,
        userChoices: userChoicesReducer,
        performance: performanceReducer
    }
})

export default store;