import {Link} from "react-router-dom";

import css from './Header.module.scss';

const Header = () => {
    return (
        <div className={css.header}>
            <Link className={css.link} to={'/'}>
                <h1>Alpaca Generator</h1>
            </Link>
        </div>
    )
}

export {Header};