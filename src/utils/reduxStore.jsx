import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";


//creating a redux store , by calling a method
//phele maine ek redux store create kiya , phir maine usko configure kar diya ek reducer se.
//ye create akrne ke baad mujhe is Store ko anpe sare components ko excess karne dena hai .uske liye mujhe apne app.js ko   "<Provider> App.js <Provider/>" provider mia wrap karna hoga.
const reduxStore = configureStore({
   reducer:{
    user: userReducer,
    feed: feedReducer,
    connection: connectionReducer
   },
});

export default reduxStore;