export const checkValidData=(email,password,name)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   

    const isUserNameValid=/^[a-zA-Z0-9]+$/.test(name)

    if(!isEmailValid) return "Email Id is not valid"
    if(!isPasswordValid) return "Password is not valid"
    if(!isUserNameValid) return "UserName is not valid"

    return null;
}


// https://saturncloud.io/blog/how-can-i-validate-an-email-address-using-a-regular-expression/
//https://regexr.com/3bfsi