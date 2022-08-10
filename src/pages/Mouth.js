import {useDispatch, useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";
import {imageActive} from "../redux/slices";

const Mouth = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.mouth;
    const dispatch = useDispatch();

    return (
        <div className={css.btnGroup}>
            {values.map((mouth, index) => <button
                key={index}
                className={css.btn}
                onClick={() => dispatch(imageActive.changeMouth(mouth))}
            >{incFirstLetter(mouth)}</button>)}
        </div>
    )
}

export {Mouth};