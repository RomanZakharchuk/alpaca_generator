import css from './ImageSection.module.scss';
import {Image, ImageBtnGroup} from "../../components";

const ImageSection = () => {
    return (
        <div className={css.imageSection}>
            <Image/>
            <ImageBtnGroup/>
        </div>
    )
}

export {ImageSection};