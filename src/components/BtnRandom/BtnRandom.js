import {useDispatch, useSelector} from "react-redux";

import {imageActive} from "../../redux/slices";

const BtnRandom = () => {
    const dispatch = useDispatch();
    const {images} = useSelector(state => state.images);

    const accessories = images.accessories.values;
    const bg = images.backgrounds.values;
    const ears = images.ears.values;
    const eyes = images.eyes.values;
    const hair = images.hair.values;
    const leg = images.leg.values;
    const mouth = images.mouth.values;
    const neck = images.neck.values;

    const getRandom = (item) => item[Math.floor(Math.random() * item.length)];

    const randomImage = (accessories, bg, ears, eyes, hair, leg, mouth, neck) => {
        dispatch(imageActive.changeAccessories(getRandom(accessories)));
        dispatch(imageActive.changeBackground(getRandom(bg)));
        dispatch(imageActive.changeEars(getRandom(ears)));
        dispatch(imageActive.changeEyes(getRandom(eyes)));
        dispatch(imageActive.changeHair(getRandom(hair)));
        dispatch(imageActive.changeLeg(getRandom(leg)));
        dispatch(imageActive.changeMouth(getRandom(mouth)));
        dispatch(imageActive.changeNeck(getRandom(neck)));
    }

    return (
        <button onClick={() => (
            randomImage(accessories, bg, ears, eyes, hair, leg, mouth, neck)
        )}>Random</button>
    )
}

export {BtnRandom};