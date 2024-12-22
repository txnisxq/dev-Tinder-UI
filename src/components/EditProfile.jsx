import React, { useState } from 'react'
import { UserCard } from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



export const EditProfile = ({user}) => {

  const dispatch = useDispatch();
  
  const [firstName , setFirstName] = useState(user.firstName);
  const [lastName , setLastName] = useState(user.lastName);
  const [photoUrl , setPhotoUrl] = useState(user.photoUrl || "");
  const [about , setAbout] = useState(user.about || "");
  const [gender , setGender] = useState(user.gender || "");
  const [ skills, setSkills] = useState(user.skills || "");
  const [ age, setAge] = useState(user.age || "");
  const [errorMessage , setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

 

  const saveProfile = async()=>{
    
    try{
        const res = await axios.patch(BASE_URL + "/profile/edit" , {firstName , lastName , age , gender , about , skills , photoUrl}, {withCredentials:true});
        
        dispatch(addUser(res?.data?.data));
        

        setShowToast(true);
        
        setTimeout(()=>{
            setShowToast(false)
        },3000);
        
    }
    catch(err){
        console.log(err.message);
    }
  }
  
    return (
        <div className='flex justify-center m-10'>
           <div className='flex justify-center  mx-10 '>
             <div className="card bg-primary text-primary-content w-96  ">
              <div className="card-body">
                
               
                  <h2 className="card-title  justify-center text-xl">Edit Profile</h2>
               
               
               
               <div>
                 <label className="form-control w-full max-w-xs my-2">
                  
                  <div className="label">
                     <span className="label-text text-black text-base">First Name</span>
                  </div>

                     <input 
                     type="text" 
                     placeholder="Edit your first name*" 
                     className="input input-bordered w-full max-w-xs text-white" 
                     value={firstName}
                     onChange={(e)=>setFirstName(e.target.value)}
                     />

                 </label>

                 
                 <label className="form-control w-full max-w-xs my-2">
                  
                  <div className="label">
                     <span className="label-text text-black text-base ">Last Name</span>
                  </div>

                     <input 
                     type="text" 
                     placeholder="Edit your last name*" 
                     className="input input-bordered w-full max-w-xs text-white"
                     value={lastName}
                     onChange={(e)=>setLastName(e.target.value)} />

                 </label>

                 <label className="form-control w-full max-w-xs my-2">
                  
                  <div className="label">
                     <span className="label-text text-black text-base">Photo url</span>
                  </div>

                     <input 
                     type="text" 
                     placeholder="Edit your Profile photo*" 
                     className="input input-bordered w-full max-w-xs text-white" 
                     value={photoUrl}
                     onChange={(e)=>setPhotoUrl(e.target.value)}
                     />

                 </label>

                 <label className="form-control w-full max-w-xs my-2">
                  
                  <div className="label">
                     <span className="label-text text-black text-base ">Gender</span>
                  </div>

                     <input 
                     type="text" 
                     placeholder="Edit your Gender*" 
                     className="input input-bordered w-full max-w-xs text-white"
                     value={gender}
                     onChange={(e)=>setGender(e.target.value)} />

                 </label>

                 <label className="form-control w-full max-w-xs my-2">
                  
                  <div className="label">
                     <span className="label-text text-black text-base ">About</span>
                  </div>

                     <input 
                     type="text" 
                     placeholder="Edit your About*" 
                     className="input input-bordered w-full max-w-xs text-white"
                     value={about}
                     onChange={(e)=>setAbout(e.target.value)} />

                 </label>


                 <label className="form-control w-full max-w-xs my-2">
                  
                  <div className="label">
                     <span className="label-text text-black text-base ">Skills</span>
                  </div>

                     <input 
                     type="text" 
                     placeholder="Edit your Skills*" 
                     className="input input-bordered w-full max-w-xs text-white"
                     value={skills}
                     onChange={(e)=>setSkills(e.target.value)} />

                 </label>

                 <label className="form-control w-full max-w-xs my-2">
                  
                  <div className="label">
                     <span className="label-text text-black text-base ">Age</span>
                  </div>

                     <input 
                     type="text" 
                     placeholder="Edit your Age*" 
                     className="input input-bordered w-full max-w-xs text-white"
                     value={age}
                     onChange={(e)=>setAge(e.target.value)} />

                 </label>
               </div>

               


               <p className='text-red-700'></p>
               <div className="card-actions flex justify-center pt-4">
               <button className="btn"  onClick={saveProfile} >Save Changes</button>
               </div>

            </div>
          </div>
           </div>


           <UserCard user={{firstName , lastName, photoUrl, about, gender, skills, age}}/>
           
           
          {showToast &&
          
          <div className="toast toast-top toast-center">
             <div className="alert alert-success">
               <span>Proifle updated sucessfully</span>
             </div>

           </div>}

        </div>
    
  )
}

