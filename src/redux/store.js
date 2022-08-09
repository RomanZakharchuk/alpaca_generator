import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {imageReducer} from "./slices";

const rootReducer = combineReducers({
    images: imageReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};