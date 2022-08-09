import {ManipulationAccessorize} from "../../components";
import {Route, Routes} from "react-router-dom";
import {Accessorize, Background, Ears, EmptyPage, Eyes, Hair, Leg, Mouth, Neck} from "../../pages";

const ManipulationSection = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<ManipulationAccessorize/>}>
                    <Route path={'/'} element={<EmptyPage/>}/>
                    <Route path={'hair'} element={<Hair/>}/>
                    <Route path={'ears'} element={<Ears/>}/>
                    <Route path={'eyes'} element={<Eyes/>}/>
                    <Route path={'mouth'} element={<Mouth/>}/>
                    <Route path={'neck'} element={<Neck/>}/>
                    <Route path={'leg'} element={<Leg/>}/>
                    <Route path={'accessories'} element={<Accessorize/>}/>
                    <Route path={'background'} element={<Background/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export {ManipulationSection};