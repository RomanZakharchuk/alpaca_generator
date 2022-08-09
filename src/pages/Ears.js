import {useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";

const Ears = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.ears;

    return (
        <div className={css.btnGroup}>
            {values.map((ears, index) => <button
                key={index}
                className={css.btn}
            >{incFirstLetter(ears)}</button>)}
        </div>
    )
}

export {Ears};