import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

export const Login = () => {
  
  const[emailId , setEmailId] = useState("tanishq@gmail.com");
  const[password , setPassword] = useState("Tanishq@123");
  const dispatch = useDispatch();

  const [errorMessage , setErrorMessage] = useState("");
  

  //here i am using useNavigate hook , to navigate my page to feed page after user login.
  const navigate = useNavigate();

 const handleLogin = async()=>{
    try{
        const res = await axios.post( BASE_URL + "/login" , {emailId , password}, {withCredentials: true});

      //   console.log(res.data);
        
        //here is am dispatching an action for add user
        dispatch(addUser(res.data));

        //here i am calling navigate hook . Remember, always "return" navigate hook.
        return navigate("/");

    }
    catch(err){
        setErrorMessage(err.response.data);
    }
 }

  
    return (
    
     <div className='flex justify-center my-20'>
         <div className="card bg-primary text-primary-content w-96 ">
            <div className="card-body">
                
               
                  <h2 className="card-title  justify-center text-xl">Login</h2>
               
               
               
               <div>
                 <label className="form-control w-full max-w-xs my-2">
                  
                  <div className="label">
                     <span className="label-text text-black text-base">Email</span>
                  </div>

                     <input 
                     type="text" 
                     placeholder="Enter your Email*" 
                     className="input input-bordered w-full max-w-xs text-white" 
                     value={emailId}
                     onChange={(e)=>setEmailId(e.target.value)}
                     />

                 </label>

                 
                 <label className="form-control w-full max-w-xs my-2">
                  
                  <div className="label">
                     <span className="label-text text-black text-base ">Password</span>
                  </div>

                     <input 
                     type="text" 
                     placeholder="Enter your Password*" 
                     className="input input-bordered w-full max-w-xs text-white"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)} />

                 </label>
               </div>

               


               <p className='text-red-700'>{errorMessage}</p>
               <div className="card-actions flex justify-center pt-4">
                  <button className="btn"  onClick={handleLogin} >Login</button>
               </div>

            </div>
       </div>
     </div>
    
  )
}
