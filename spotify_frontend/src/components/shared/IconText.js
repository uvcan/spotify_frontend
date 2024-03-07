import { Icon } from "@iconify/react";

const IconText=({iconName , displayName , active})=>{
    return (
        <div className="flex items-center justify-start cursor-pointer">
            <div className="px-5 py-2">
                <Icon icon={iconName} 
                color={active ? "white" :"grey"} 
                fontSize={20}/>
            </div>
            <div 
                className={`${
                    active ? "text-white" : "text-gray-400" // Corrected class name
                } font-semibold text-sm hover:text-white`}
            >
                {displayName}
            </div>
        </div>
    );
}

export default IconText;