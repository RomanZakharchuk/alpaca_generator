import {useDispatch, useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";
import {imageActive} from "../redux/slices";

const Neck = ({activeButton, active}) => {
    const {images} = useSelector(state => state.images);
    const {values} = images.neck;
    const dispatch = useDispatch();

    return (
        <div className={css.btnGroup}>
            {values.map((neck, index) => <button
                key={index}
                className={active === neck ? 'active' : ''}
                onClick={() => {
                    dispatch(imageActive.changeNeck(neck));
                    activeButton(neck);
                }}
            >{incFirstLetter(neck)}</button>)}
        </div>
    )
}

export {Neck};