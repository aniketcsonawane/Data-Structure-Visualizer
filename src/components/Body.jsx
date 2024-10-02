/* eslint-disable react/no-unescaped-entities */

import Home from "./Home";
import Playground from "./Playground";

/* eslint-disable react/prop-types */
export default function Body({ data_structures, nav ,datastructure, setDatastructure }) {
    return (
        <>
            {(nav === "home") ?<Home /> :<Playground data_structures={data_structures} datastructure={datastructure} setDatastructure={setDatastructure} />}
        </>
    )
}
