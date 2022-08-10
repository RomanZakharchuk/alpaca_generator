import {useDispatch, useSelector} from "react-redux";

import css from './style.module.scss';
import {incFirstLetter} from "../funcrions";
import {imageActive} from "../redux/slices";

const Hair = () => {
    const {images} = useSelector(state => state.images);
    const {values} = images.hair;

    const dispatch = useDispatch();

    return (
        <div className={css.btnGroup}>
            {values.map((hair, index) => <button
                key={index}
                onClick={() => dispatch(imageActive.changeHair(hair))}
            >{incFirstLetter(hair)}</button>)}
        </div>
    )
}

export {Hair};