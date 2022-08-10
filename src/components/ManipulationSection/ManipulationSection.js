import {ManipulationAccessorize} from "../../components";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";

import {Accessorize, Background, Ears, EmptyPage, Eyes, Hair, Leg, Mouth, Neck} from "../../pages";

const ManipulationSection = () => {
    const [active, setActive] = useState();

    const activeButton = (name) => {
        setActive(name);
    }

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<ManipulationAccessorize/>}>
                    <Route path={'/'} element={<EmptyPage/>}/>
                    <Route path={'hair'} element={<Hair activeButton={activeButton} active={active}/>}/>
                    <Route path={'ears'} element={<Ears activeButton={activeButton} active={active}/>}/>
                    <Route path={'eyes'} element={<Eyes activeButton={activeButton} active={active}/>}/>
                    <Route path={'mouth'} element={<Mouth activeButton={activeButton} active={active}/>}/>
                    <Route path={'neck'} element={<Neck activeButton={activeButton} active={active}/>}/>
                    <Route path={'leg'} element={<Leg activeButton={activeButton} active={active}/>}/>
                    <Route path={'accessories'} element={<Accessorize activeButton={activeButton} active={active}/>}/>
                    <Route path={'background'} element={<Background activeButton={activeButton} active={active}/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export {ManipulationSection};