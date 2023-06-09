import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons/FavIcon.png'
import './header.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
    }


    const navItems = <>
        <li><NavLink className={({isActive})=> isActive?'rounded px-2 py-1 bg bg-indigo-700  text-white':'rounded px-2 py-1'} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive})=> isActive?'rounded px-2 py-1 bg bg-indigo-700  text-white':'rounded px-2 py-1'} to='/all-toys'>All Toys</NavLink></li>

        <li><NavLink className={({isActive})=> isActive?'rounded px-2 py-1 bg bg-indigo-700  text-white':'rounded px-2 py-1'} to='/blogs'>Blogs</NavLink></li>
        {
            user ?
                <>
                    <li><NavLink className={({isActive})=> isActive?'rounded px-2 py-1 bg bg-indigo-700  text-white':'rounded px-2 py-1'} to='/my-toys'>My Toys</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive?'rounded px-2 py-1 bg bg-indigo-700  text-white':'rounded px-2 py-1'} to='/add-toys'> Add A Toy</NavLink></li>
                    <li><button onClick={handleSignOut}>Log out</button></li>

                </>

                :
                <li><NavLink className={({isActive})=> isActive?'rounded px-2 py-1 bg bg-indigo-700  text-white':'rounded px-2 py-1'} to='/login'>Login</NavLink></li>
        }
        {
                        user && <img title={user.displayName
                        } className='profile' src={user.photoURL} alt="" />
                    }
        
    </>
    return (
        <div className="navbar bg bg-[#1C1E53] h-20 mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        {navItems}
                    </ul>
                </div>
                <div className='flex justify-center items-center '>
                <Link to='/' className="pl-8">
                    <img className='w-20 h-20' src={logo} alt="" />
                </Link>
                    <p className='text-white  font-bold'>Play Kids Zone</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex text-white gap-2 items-center ">
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