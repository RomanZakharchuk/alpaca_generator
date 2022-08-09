import {createSlice} from "@reduxjs/toolkit";

import {defaultImage} from "../../constants";

const initialState = {defaultImage};

const imageSlice = createSlice({
    name: 'imageSlice',
    initialState,
    reducers: {}
});

const {reducer: imageReducer} = imageSlice;

export {
    imageReducer
}