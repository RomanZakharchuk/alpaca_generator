import { useSelector} from "react-redux";

import css from './Image.module.scss';

const Image = () => {
    const {defaultImage} = useSelector(state => state.images);

    const {
        backgrounds,
        neck,
        ears,
        hair,
        eyes,
        mouth,
        leg,
        accessories,
        nose
    } = defaultImage;

    return (
        <div className={css.image}>
            <img src={require(`../../alpaca/backgrounds/${backgrounds}.png`)} alt={backgrounds}/>
            <img src={require(`../../alpaca/neck/${neck}.png`)} alt={neck}/>
            <img src={require(`../../alpaca/ears/${ears}.png`)} alt={ears}/>
            <img src={require(`../../alpaca/hair/${hair}.png`)} alt={hair}/>
            <img src={require(`../../alpaca/eyes/${eyes}.png`)} alt={eyes}/>
            <img src={require(`../../alpaca/mouth/${mouth}.png`)} alt={mouth}/>
            <img src={require(`../../alpaca/leg/${leg}.png`)} alt={leg}/>
            <img src={require(`../../alpaca/accessories/${accessories}.png`)} alt={accessories}/>
            <img src={require(`../../alpaca/${nose}.png`)} alt={nose}/>
        </div>
    )
}

export {Image};