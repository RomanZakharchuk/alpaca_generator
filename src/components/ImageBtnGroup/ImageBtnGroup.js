import css from './ImageBtnGroup.module.scss';
import {BtnDownload, BtnRandom} from "../../components";

const ImageBtnGroup = () => {


    return (
        <div className={css.btnGroup}>
            <BtnRandom/>
            <BtnDownload/>
        </div>
    )
}

export {ImageBtnGroup};