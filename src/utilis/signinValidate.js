import axios from "axios"
import { URL } from "./constants"
export const signinValidate=async(emailid,upassword)=>{
    try{
      const response=await axios.post(`${URL}/users/signin`,
        {
          email:emailid.current.value,
          password:upassword.current.value
        }
        ,
        {
          headers: {
            'Content-Type': 'application/json',
          }          
        }
        )
        return response;
    }catch(error){
      console.log("Login Failed")
      return { error: "Login Failed" };
    }
    }

