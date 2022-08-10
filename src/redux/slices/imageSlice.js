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
    reducers: {
        changeHair: (state, action) => {
            state.defaultImage.hair = action.payload
        },
        changeEars: (state, action) => {
            state.defaultImage.ears = action.payload
        },
        changeEyes: (state, action) => {
            state.defaultImage.eyes = action.payload
        },
        changeMouth: (state, action) => {
            state.defaultImage.mouth = action.payload
        },
        changeNeck: (state, action) => {
            state.defaultImage.neck = action.payload
        },
        changeLeg: (state, action) => {
            state.defaultImage.leg = action.payload
        },
        changeAccessories: (state, action) => {
            state.defaultImage.accessories = action.payload
        },
        changeBackground: (state, action) => {
            state.defaultImage.backgrounds = action.payload
        }
    }
});

const {reducer: imageReducer, actions: {
    changeHair,
    changeNeck,
    changeMouth,
    changeLeg,
    changeEyes,
    changeEars,
    changeAccessories,
    changeBackground
}} = imageSlice;

const imageActive = {
    changeHair,
    changeNeck,
    changeMouth,
    changeLeg,
    changeEyes,
    changeEars,
    changeAccessories,
    changeBackground
};

export {
    imageReducer,
    imageActive
}