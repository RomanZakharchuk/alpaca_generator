import {useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";

const Eyes = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.eyes;

    return (
        <div className={css.btnGroup}>
            {values.map((eyes, index) => <button
                key={index}
                className={css.btn}
            >{incFirstLetter(eyes)}</button>)}
        </div>
    )
}

export {Eyes};