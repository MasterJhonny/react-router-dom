import { Link, Outlet } from 'react-router-dom'

import { NotFound } from './NotFound'

function Dasbhoard() {
    return (
        <div className="App">
            <h2>Dasbhoard</h2>
            <p>this is a DASBOOARD</p>
            <Link to="welcome" >Welcome</Link>
            <br />
            <br />
            <Link to="bye" >Bye</Link>
            <Outlet/>
        </div>
    );
}

export {Dasbhoard};