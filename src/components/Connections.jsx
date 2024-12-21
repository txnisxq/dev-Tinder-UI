import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/connectionSlice'

export const Connections = () => {
  
    const connections = useSelector((store)=>store.connection);
    console.log(connections);
    const dispatch = useDispatch();

    const fetchConnections = async()=>{
        try{
           const res = await axios.get(BASE_URL + "/user/connections" , {withCredentials:true});
           console.log(res?.data?.data);
           dispatch(addConnection(res?.data?.data));
        }
        catch(err){
           console.error(err.message);
        }
    }
    
    useEffect(()=>{
        fetchConnections();
    },[]);

     
   

    if(!connections)return;


    if(connections.length === 0){
        return (
            <div className='flex justify-center'>
        
               <h1 className='text-2xl'>U have 0 connections</h1>

            </div>
        )
    }
  
    return (
    <div className=' text-center my-10'>
        
        <h1 className='text-3xl underline text-white'>My Connections</h1>

        {
            connections.map((connection, )=>{
                const {firstName, lastName, about, age, photoUrl, skills, _id , gender} = connection;
            return(
                <div key={_id} className='m-4 p-4 rounded-lg bg-zinc-700 flex w-1/3 mx-auto '>
                        <div className='my-5'>
                           <img alt='photo'  className='w-20 h-20 rounded-full'  src={photoUrl}/>
                        </div>

                        <div className='my-5 mx-10 text-left'>
                           <h2 className='font-bold text-2xl'>{firstName + " " + lastName}</h2>
                           {age && gender && <p>{age + ", " + gender}</p>}
                           <p>{about}</p>
                        </div>
                   
                </div>
            )
            })
        }

    </div>
  )
}
