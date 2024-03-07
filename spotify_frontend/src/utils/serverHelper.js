import {backendUrl} from "./config";

export const makeUnauthenticatdePostRequest=async(route,body)=>{
    const response=await fetch(backendUrl+route,{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify(body)
    });
    const formattedResponse=await response.json();
    return formattedResponse;
}


export const makeAuthenticatdePostRequest=async(route ,body)=>{

}