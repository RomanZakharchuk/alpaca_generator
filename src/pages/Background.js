import {useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";

const Background = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.backgrounds;

    return (
        <div className={css.btnGroup}>
            {values.map((backgrounds, index) => <button
                key={index}
                className={css.btn}
            >{incFirstLetter(backgrounds)}</button>)}
        </div>
    )
}

export {Background};