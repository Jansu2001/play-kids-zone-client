import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Header = () => {

    // const user = 'Jansu'
    const user = null

    const handleSignOut = () => {

    }



    const navItems = <>
        <li><NavLink className={({isActive})=> isActive?'bg bg-cyan-500':''} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive})=> isActive?'bg bg-cyan-500':''} to='/'>About</NavLink></li>
        <li><NavLink className={({isActive})=> isActive?'bg bg-cyan-500':''} to='/'>Services</NavLink></li>
        <li><NavLink className={({isActive})=> isActive?'bg bg-cyan-500':''} to='/'>Blog</NavLink></li>
        <li><NavLink className={({isActive})=> isActive?'bg bg-cyan-500':''} to='/'>Contact</NavLink></li>
        {
            user ?
                <>
                    <li><NavLink className={({isActive})=> isActive?'bg bg-cyan-500':''} to='/my-bookings'>My Bookings</NavLink></li>
                    <li><button onClick={handleSignOut}>Log out</button></li>

                </>

                :
                <li><NavLink className={({isActive})=> isActive?'bg bg-cyan-500':''} to='/login'>Login</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <button className="btn btn-outline btn-secondary">Appointment</button>
            </div> */}
        </div>
    );
}

export default Header;