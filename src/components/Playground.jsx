/* eslint-disable react/prop-types */

function Playground({ data_structures, datastructure, setDatastructure }) {
    return (
        <div>
            <div className="structureList w-100 bg-dark p-2 pb-3">
                <ul className="nav nav-pills">
                    {
                        data_structures.map((data, ind) => {
                            return <li key={ind} className="nav-item m-1"><a href="#" className={`nav-link ${datastructure == data ? 'active' : ''}`} aria-current="page" onClick={()=>{setDatastructure(data)}}>{data}</a></li>
                        })
                    }
                </ul>
            </div>
            <div className="bg-dark w-100 d-flex" style={{ height: "88vh" }}>
                <div className="code-container w-50 border h-75 m-1"></div>
                <div className="visual-container w-50 border h-75 m-1"></div>
            </div>
        </div>
    )
}

export default Playground