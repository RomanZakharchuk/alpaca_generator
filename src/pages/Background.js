import {useDispatch, useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";
import {imageActive} from "../redux/slices";

const Background = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.backgrounds;
    const dispatch = useDispatch();

    return (
        <div className={css.btnGroup}>
            {values.map((backgrounds, index) => <button
                key={index}
                className={css.btn}
                onClick={() => dispatch(imageActive.changeBackground(backgrounds))}
            >{incFirstLetter(backgrounds)}</button>)}
        </div>
    )
}

export {Background};