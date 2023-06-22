import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContextProvider/AuthProviders";
// import Swal from "sweetalert2";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
        navigate('/');
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

    return (
        <div>
            <div className="navbar bg-fuchsia-600">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
          <li>
             <NavLink to="/">Home</NavLink>
           </li>
           <li>
             <NavLink to="/allToys">All-Toys</NavLink>
           </li>

           <li>
             <NavLink to="/blogs">Blogs</NavLink>
           </li>
           <li>
               <NavLink to="/myToys">My-Toys</NavLink>
            </li>

           <li>
              <NavLink to="/addaToy"> AddToys</NavLink>
             </li>
       </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
    <li className="pt-2">
             <NavLink to="/"  className="bg-fuchsia-50 text-black">Home</NavLink>
           </li>
           <li className="pt-2">
             <NavLink to="/allToys" className="pt-2">All-Toys</NavLink>
           </li>

           <li className="pt-2">
             <NavLink to="/blogs">Blogs</NavLink>
           </li>

           <li>
           { user?
           (
            <li className=" bg-fuchsia-600 border-none text-white">
               <NavLink to="/myToys">My-Toys</NavLink>
            </li>
           ):(
            <></>
           )
           }
           </li>
           <li>
              { user?
           (
            <li className=" bg-fuchsia-600 border-none text-white" >
               <NavLink to="/addToy"> AddToys</NavLink>
            </li>
           ):(
            <></>
           )
           }</li>
    </ul>
  </div>
  <div className="navbar-end">
  <span className="flex items-center gap-x-1">
            {user ? (
              <>
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  src={user.photoURL}
                  className="w-8 h-8 rounded-full bg-gray-500"
                />
                {/* <Tooltip id="my-tooltip" /> */}

                <button className="btn bg-fuchsia-50 text-black" onClick={handleLogout}>
                  {" "}
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn bg-fuchsia-50 text-black">
                  Login
                </Link>
              </>
            )}
          </span>
  </div>
</div>
        </div>
    );
};

export default Navbar;