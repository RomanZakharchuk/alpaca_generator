import {NavLink, Outlet} from "react-router-dom";

import css from './ManipulationAccessorize.module.scss';

const ManipulationAccessorize = () => {
    return (
        <div className={css.manipulation}>
            <h2>Accessorize the alpaca's</h2>
            <div className={css.links}>
                <NavLink className={css.link} to={'hair'}>Hair</NavLink>
                <NavLink className={css.link} to={'ears'}>Ears</NavLink>
                <NavLink className={css.link} to={'eyes'}>Eyes</NavLink>
                <NavLink className={css.link} to={'mouth'}>Mouth</NavLink>
                <NavLink className={css.link} to={'neck'}>Neck</NavLink>
                <NavLink className={css.link} to={'leg'}>Leg</NavLink>
                <NavLink className={css.link} to={'accessories'}>Accessories</NavLink>
                <NavLink className={css.link} to={'background'}>Background</NavLink>
            </div>

            <h2>Style</h2>
            <Outlet/>
        </div>
    )
}

export {ManipulationAccessorize};