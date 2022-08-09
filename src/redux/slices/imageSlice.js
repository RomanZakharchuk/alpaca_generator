import {createSlice} from "@reduxjs/toolkit";

import {images} from "../../constants";

const initialState = {
    defaultImage: {
        backgrounds: "darkblue70",
        neck: "default",
        ears: "default",
        hair: "default",
        eyes: "default",
        mouth: "default",
        leg: "default",
        accessories: "earings",
        nose: "nose"
    },
    images
};

const imageSlice = createSlice({
    name: 'imageSlice',
    initialState,
    reducers: {}
});

const {reducer: imageReducer} = imageSlice;

export {
    imageReducer
}