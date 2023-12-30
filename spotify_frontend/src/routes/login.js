import { Icon } from '@iconify/react';

const LoginComponent=()=>{
    return(
        <div className="w-full h-full flex flex-col items-center">
            <div className='logo p-5 border-b border-solid border-grey-300 w-full flex justify-center'>
                <Icon icon="logos:spotify" width={150} />
            </div>
            
        </div>
   );
};



export default LoginComponent;