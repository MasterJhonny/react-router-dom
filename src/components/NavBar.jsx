import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <header className="App">
            <ul>
                <li>
                    <NavLink to='/' >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' >About</NavLink>
                </li>
                <li>
                    <NavLink to='/users' >Users</NavLink>
                </li>
            </ul>
        </header>
    );
}

export {NavBar};