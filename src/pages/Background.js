import {useDispatch, useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";
import {imageActive} from "../redux/slices";

const Background = ({activeButton, active}) => {
    const {images} = useSelector(state => state.images);
    const {values} = images.backgrounds;
    const dispatch = useDispatch();

    return (
        <div className={css.btnGroup}>
            {values.map((backgrounds, index) => <button
                key={index}
                className={active === backgrounds ? 'active' : ''}
                onClick={() => {
                    dispatch(imageActive.changeBackground(backgrounds));
                    activeButton(backgrounds);
                }}
            >{incFirstLetter(backgrounds)}</button>)}
        </div>
    )
}

export {Background};