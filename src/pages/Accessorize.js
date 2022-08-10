import {useDispatch, useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";
import {imageActive} from "../redux/slices";

const Accessorize = ({activeButton, active}) => {
    const {images} = useSelector(state => state.images);
    const {values} = images.accessories;
    const dispatch = useDispatch();

    return (
        <div className={css.btnGroup}>
            {values.map((accessories, index) => <button
                key={index}
                className={active === accessories ? 'active' : ''}
                onClick={() => {
                    dispatch(imageActive.changeAccessories(accessories));
                    activeButton(accessories);
                }}
            >{incFirstLetter(accessories)}</button>)}
        </div>
    )
}

export {Accessorize};