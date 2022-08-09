import {useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";

const Mouth = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.mouth;

    return (
        <div className={css.btnGroup}>
            {values.map((mouth, index) => <button
                key={index}
                className={css.btn}
            >{incFirstLetter(mouth)}</button>)}
        </div>
    )
}

export {Mouth};