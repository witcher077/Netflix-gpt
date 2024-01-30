
import React from 'react'

function Validation(email,password) {
  
    const isEmailValid=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValid=/^[a-z ,.'-]+$/.test(name);

    if(!isEmailValid) return "Email is Invalid";
    else if(!isPasswordValid) return "Password is Invalid";
    // else if(isNameValid) return "Name is Invalid";

    return null;

}

export default Validation;