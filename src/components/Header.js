import { Route, Routes, Link, Outlet } from 'react-router-dom'

function Header() {
    return (
        <div className='container-fluid'>
            <nav className='nav w-100'>
                <ul>
                    <li>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    {/* <li>
                        <Link to='/users' className='nav-link'>Users</Link>
                    </li> */}
                    <li>
                        <Link to='/posts' className='nav-link'>Albums</Link>
                    </li>
                </ul>
                <Outlet />

            </nav>
        </div>

    );
}

export default Header;