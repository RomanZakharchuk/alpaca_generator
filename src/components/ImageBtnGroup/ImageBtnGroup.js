import css from './ImageBtnGroup.module.scss';

const ImageBtnGroup = () => {
    return (
        <div className={css.btnGroup}>
            <button>Random</button>
            <button>Download</button>
        </div>
    )
}

export {ImageBtnGroup};