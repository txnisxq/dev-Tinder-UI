import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';



  const Delux = () => {

    const handleBuyClick = async(type)=>{
      
        
        const order = await axios.post(BASE_URL + "/payment/create" , {membershipType: type} , {withCredentials:true});

// console.log("hi");


        //after getting a response from backend after caling above API, we will get an "order" object which will contains the order details. 
    //we will use that order details to open razorpay dialogbox for payment. and after successful payment we will get a response from razorpay which will contains the payment details
    //we will send that payment details to backend to verify the payment and update the user membership status in database.
    const { keyId, orderId , amount, notes, currency, email} = order.data;
    console.log(order.data);

    const options = {
        key: keyId, // Enter the Key ID generated from the Dashboard
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or ₹500.
        currency,
        name: "Devlify",
        description: "Enjoy your premium membership",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        prefill: {
            name:  notes.firstName + " " + notes.lastName,
            contact: "9999999999"
        },
        theme: {
            color: "#82b823"
        }
    }
   
   
   
    const rzp = new window.Razorpay(options);
    rzp.open();
    };

    
     
  return (
	<div className="m-10">
	   <div className="flex w-full ">
          <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
            <h1 className=" text-3xl font-bold">Silver Member</h1>
            <ul>
                <li>1. Unlimited swipes</li>
                <li>2. See who liked you</li>
                <li>3. 25 connection requests per day </li>
            </ul>

            <button 
            onClick={()=>handleBuyClick("silver")}
            className="btn btn-primary mt-5 font-semibold text-gray-800 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 shadow-md hover:shadow-lg hover:scale-105 transition">Buy Silver</button>

          </div>
          <div className="divider divider-horizontal">OR</div>
          <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
            <h1 className="text-3xl font-bold ">Gold Member</h1>
            <ul> 
                <li>1. Unlimited swipes</li>
                <li>2. See who liked you</li>
                <li>3. Rewind your last swipe</li>
                <li>4. Get matched with more people</li>
                <li>5. 100 connection requests per day </li>
            </ul>


            <button 
            onClick={()=>handleBuyClick("gold")}
            className="btn btn-primary mt-5 font-semibold text-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-md hover:shadow-yellow-400/50 hover:shadow-lg hover:scale-105 transition">Buy Gold</button>
          </div>
       </div>
	</div>
  );
}

export default Delux;
