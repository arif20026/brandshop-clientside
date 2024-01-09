import { useContext } from "react";
import { NavLink,  } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>

    </>

  

    const {user, logOut} =useContext(AuthContext)

    const handleLogOUt = () => {
        logOut()
        .then(() => console.log('user logged out successfully'))
        .catch(error => console.log(error))
    }
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img src="/src/assets/e-commerce-logo-design-vector-260nw-1727767885.jpg" alt="" className="w-14 h-14" />
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user && <div className="flex justify-center items-center gap-2">
                            <p>{user.displayName}</p>
                            <img src={user.photoURL} className="w-10  mr-4 rounded-full" alt="" />
                        </div>
                    }
                    {
                        user?  <button className="btn" onClick={handleLogOUt}>LogOut</button>:<NavLink to="/login" className="btn bg-slate-400">Login</NavLink>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;