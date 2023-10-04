import axios from "axios"
import { URL } from "./constants"
export const signUpValidate=async(uname,upassword,emailid)=>{
    try{
        const response = await axios.post(`${URL}/users/signup`, {
            name: uname.current.value,
            email: emailid.current.value,
            password: upassword.current.value
          });
        return response;
    }catch(error){
      console.log("User Already Exists!!! Please Signin")
      return { error: "User Already Exists!!! Please Signin" };
    }
    }

