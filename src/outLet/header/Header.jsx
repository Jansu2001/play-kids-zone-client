import { Link } from 'react-router-dom';
import logo from '../../assets/icons/avengers.png'
import './header.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
    }


    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-toys'>All Toys</Link></li>

        <li><Link to='/blogs'>Blogs</Link></li>
        {
            user ?
                <>
                    <li><Link to='/my-toys'>My Toys</Link></li>
                    <li><Link to='/add-toys'> Add A Toy</Link></li>
                    <li><button onClick={handleSignOut}>Log out</button></li>

                </>

                :
                <li><Link to='/login'>Login</Link></li>
        }
        {
                        user && <img title={user.displayName
                        } className='profile' src={user.photoURL} alt="" />
                    }

            {/* <Link> {user && user.displayName}</Link> */}
        
    </>
    return (
        <div className="navbar bg-cyan-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost">
                    <img className='w-24 h-24' src={logo} alt="" />
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