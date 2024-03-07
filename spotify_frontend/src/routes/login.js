import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { makeAuthenticatdePostRequest } from '../utils/serverHelper';
const LoginComponent=()=>{
    const [email ,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signin=async ()=>{
    const data={email,password};
    const response =makeAuthenticatdePostRequest(
        "users/sign-in",
        data
    )  
    if(response && response.err){
        alert("Sucesss");
        return response;
    }else{
        alert("fail");
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
                <div className='font-bold mb-6'>To continue , log in to Spotify.</div>
                <TextInput
                label="Email address or username"
                placeholder="Email address or Username"
                className="my-5"
                value={email}
                setValue={setEmail}
                />
                <PasswordInput
                label="Password"
                placeholder="Password"
                value={password}
                setValue={setPassword}
                />
                <div className='w-full flex justify-end my-10'>
                    <button className='bg-green-300  font-semibold p-4 px-9 rounded-full'
                        onClick={(e)=>{
                            e.preventDefault();
                            signin();
                        }}
                    >
                        LOG IN
                    </button>
                </div>
                <div className='w-full border border-solid grey-300'></div>
                <div className='my-6 font-bold text-lg'>Don't have an account?</div>
                <div className='border border-grey-500 text-grey-300 w-full flex items-center justify-center rounded-full p-4 font-semibold '>
                    <Link to={"/signup"}>
                    SIGN UP FOR SPOTIFY
                    </Link>
                </div>
            </div>
        </div>
   );
};



export default LoginComponent;