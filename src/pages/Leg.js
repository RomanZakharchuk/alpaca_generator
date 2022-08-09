import {useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";

const Leg = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.leg;

    return (
        <div className={css.btnGroup}>
            {values.map((leg, index) => <button
                key={index}
                className={css.btn}
            >{incFirstLetter(leg)}</button>)}
        </div>
    )
}

export {Leg};