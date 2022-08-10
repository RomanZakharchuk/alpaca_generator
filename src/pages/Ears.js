import {useDispatch, useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";
import {imageActive} from "../redux/slices";

const Ears = ({activeButton, active}) => {
    const {images} = useSelector(state => state.images);
    const {values} = images.ears;
    const dispatch = useDispatch();

    return (
        <div className={css.btnGroup}>
            {values.map((ears, index) => <button
                key={index}
                className={active === ears ? 'active' : ''}
                onClick={() => {
                    dispatch(imageActive.changeEars(ears));
                    activeButton(ears);
                }}
            >{incFirstLetter(ears)}</button>)}
        </div>
    )
}

export {Ears};