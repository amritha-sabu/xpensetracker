import { configureStore } from "@reduxjs/toolkit";
import reducerMappings from ".";

const store = configureStore({
    reducer: reducerMappings,
});

export default store;