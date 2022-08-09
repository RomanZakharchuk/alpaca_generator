import {useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";

const Accessorize = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.accessories;

    return (
        <div className={css.btnGroup}>
            {values.map((accessories, index) => <button
                key={index}
                className={css.btn}
            >{incFirstLetter(accessories)}</button>)}
        </div>
    )
}

export {Accessorize};