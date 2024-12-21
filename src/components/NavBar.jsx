import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";


export const NavBar = () => {
  
  //here iam using a hook "useSelector" , which is used to get data from store directly. TO yaha mai user ko store se nikal raha hu .
  const user  = useSelector((store=>store.user));

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logOutHandler = async() =>{
      try{
        const res = await axios.post(BASE_URL + "/logout" , {} ,{withCredentials:true});
        dispatch(removeUser());
        navigate("/login");
      }
      catch(err){
        console.error(err);
      }
  }


  
  return (
    <div className="navbar bg-base-200">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl"><h2>&#128511;</h2>Dev-Tinder</Link>
  </div>
  {user && (<div className="flex-none gap-2">
    <div className="form-control"> Welcome {user.firstName}</div>


    <div className="dropdown dropdown-end mx-5 flex ">
      
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link to="/connections">Connections</Link>
        </li>
        <li><a onClick={logOutHandler}>Logout</a></li>
      </ul>
    </div>


  </div>)}
       </div>
  )
}
