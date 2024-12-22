import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addFeed} from "../utils/feedSlice"
import { UserCard } from "./UserCard";

export const Feed = () => {
  
  const dispatch = useDispatch();
  const feed = useSelector((store)=>store.feed);
  

  const getFeed = async() =>{
    try{
      if(feed)return;
       const res = await axios.get(BASE_URL + "/feed" , {withCredentials:true});
       
       dispatch(addFeed(res.data.data));
       
      

    }
    catch(err){
     console.log(err);
    }
  }

  useEffect(()=>{
    getFeed();
  },[]);

  if(!feed){
    return;
  }

  if(feed.length == 0){
    return <p className="text-center my-10 text-blue-50 text-2xl">No new users found!!!</p>
  }
  
  return (
    feed && 
    
    <div className="flex border-white justify-center my-6">
    <UserCard user={feed[0]}/>
    </div>

    

  )
}
