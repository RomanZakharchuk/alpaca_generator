import css from './Content.module.scss';
import {ImageSection, ManipulationSection} from "../../components";


const Content = () => {
    return (
        <div className={css.content}>
            <ImageSection/>
            <ManipulationSection/>
        </div>
    )
}

export {Content};