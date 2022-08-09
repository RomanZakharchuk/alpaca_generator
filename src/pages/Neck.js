import {useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";

const Neck = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.neck;

    return (
        <div className={css.btnGroup}>
            {values.map((neck, index) => <button
                key={index}
                className={css.btn}
            >{incFirstLetter(neck)}</button>)}
        </div>
    )
}

export {Neck};