import {useSelector} from "react-redux";

import css from './style.module.scss';
import {incFirstLetter} from "../funcrions";

const Hair = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.hair;

    return (
        <div className={css.btnGroup}>
            {values.map((hair, index) => <button
                key={index}
                className={css.btn}
            >{incFirstLetter(hair)}</button>)}
        </div>
    )
}

export {Hair};