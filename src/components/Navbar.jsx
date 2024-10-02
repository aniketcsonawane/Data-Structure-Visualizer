/* eslint-disable react/prop-types */
export default function Navbar({setNav,nav}) {
return (
        <>  
            <header className="py-3 w-100 text-bg-dark">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-light link-body-emphasis text-decoration-none">
                        <img height="30px" width="30px" src="./images/data-structure-sv.svg"></img>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className={`nav-link ${nav === 'home' ? 'active' : ''}`} onClick={()=>{setNav('home')}} aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#" className={`nav-link ${nav === 'data_structure' ? 'active' : ''}`} onClick={()=>{setNav('data_structure')}}>Data Structures</a></li>
                    </ul>
                </div>
                <hr className="mb-0" />
            </header>

        </>

    )
}
