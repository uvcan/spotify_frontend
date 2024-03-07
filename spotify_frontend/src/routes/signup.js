import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { makeUnauthenticatdePostRequest } from '../utils/serverHelper';
const  SignupComponent=()=>{

    const [email,setEmail]=useState("");
    const [confimEmail,setConfirmEmail]=useState("");
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");

    const  signUp=async ()=>{
        if(email !== confimEmail){
            alert("Email and confirm email dose not match");
            return;
        }
       const data ={email,password,userName,firstName,lastName};
       const response=await makeUnauthenticatdePostRequest(
        "/users/signup",
        data
       )
       if(response && !response.err){
        console.log(response);
        alert("Success");
       }else{
        alert("Fail");
       }
    }

    return(
        <div className="w-full h-full flex flex-col items-center">
            <div className='logo p-5 border-b border-solid border-grey-300 w-full flex justify-center'>
                <Link to={"/home"}>
                    <Icon icon="logos:spotify" width={150} />
                </Link>
            </div>
            <div className="Input region w-1/4 py-8 flex  items-center justify-center flex-col ">
                <div className='font-bold mb-6 text-2xl'>
                    Sign up for free to start listning.
                </div>
                <TextInput
                label="Email address"
                placeholder="Email your email adddress"
                className="my-5"
                value={email}
                setValue={setEmail}
                />
                <TextInput
                label="Confirm Email address "
                placeholder="Enter your email again"
                className="my-5"
                value={confimEmail}
                setValue={setConfirmEmail}
                />
                <TextInput
                label="User Name"
                placeholder="Email your user name"
                className="my-5"
                value={userName}
                setValue={setUserName}
                />
                <PasswordInput
                label="Create a password"
                placeholder="Enter a strong Password"
                value={password}
                setValue={setPassword}
                />
                <div className='w-full flex justify-between items-center space-x-2'>
                    <TextInput
                    label="First Name"
                    placeholder="Enter first Name"
                    className="my-5"
                    value={firstName}
                    setValue={setFirstName}
                    />
                    <TextInput
                    label="Last Name"
                    placeholder="Enter Last Name"
                    className="my-5"
                    value={lastName}
                    setValue={setLastName}
                    />
                </div>
                <div className='w-full flex justify-center my-10'>
                    <button className='bg-green-300  font-semibold p-4 px-9 rounded-full' 
                        onClick={(e) => {
                            e.preventDefault();
                            signUp();
                        }}
                        >
                        SIGN UP
                    </button>
                </div>
                <div className='w-full border border-solid grey-300'></div>
                <div className='my-6 font-bold text-lg'>Already have an account ?</div>
                <div className='border border-grey-500 text-grey-300 w-full flex items-center justify-center rounded-full p-4 font-semibold '>
                    <Link to={"/login"}>
                    LOG IN INSTED
                    </Link>
                </div>
            </div>
        </div>
   );
};



export default SignupComponent;