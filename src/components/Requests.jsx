import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestSlice'

export const Requests = () => {

  const dispatch = useDispatch();
  const requests = useSelector((store)=>store.requests);

  const fetchRequests = async()=>{
    try{
        const res = await axios.get(BASE_URL + "/user/requests" , {withCredentials: true});
        console.log(res.data.data);
        dispatch(addRequest(res?.data?.data));
    }
    catch(err){

    }
  }

  useEffect(()=>{
    fetchRequests();
  },[]);
  
  if(!requests)return;


    if(requests.length === 0){
        return (
            <div className='flex justify-center'>
        
               <h1 className='text-2xl'>U have 0 pending requests</h1>

            </div>
        )
    }
  
    return (
    <div className=' text-center my-10'>
        
        <h1 className='text-3xl underline text-white'>My Requests</h1>

        {
            requests.map((request,index)=>{
                
            return(
                <div key={index} className='m-4 p-4 rounded-xl bg-zinc-700 flex justify-around  w-2/4 mx-auto h-28'>
                        <div className=''>
                           <img alt='photo'  className='w-20 h-20 rounded-full'  src={request.fromUserId.photoUrl}/>
                        </div>

                        <div className='my-2 mx-10 text-left'>
                           <h2 className='font-bold text-2xl'>{request.fromUserId.firstName + " " + request.fromUserId.lastName}</h2>
                           
                           <p>{request.fromUserId.about}</p>
                        </div>

                        <div className='my-5'>
                        <button type="button" className="mx-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reject</button>
                        <button type="button" className="mx-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Accept</button>
                        </div>
                   
                </div>
            )
            })
        }

    </div>
  )
}
