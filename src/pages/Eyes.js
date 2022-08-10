import {useDispatch, useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";
import {imageActive} from "../redux/slices";

const Eyes = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.eyes;
    const dispatch = useDispatch();

    return (
        <div className={css.btnGroup}>
            {values.map((eyes, index) => <button
                key={index}
                className={css.btn}
                onClick={() => dispatch(imageActive.changeEyes(eyes))}
            >{incFirstLetter(eyes)}</button>)}
        </div>
    )
}

export {Eyes};