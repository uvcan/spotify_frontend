const TextInput=({label,placeholder,className,value,setValue})=>{
    return(
        <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
            <label for={label} className="font-semibold">
            {label}
            </label>
            <input 
                type="text" 
                placeholder={placeholder} 
                className="p-3 border border-grey-400 rounded placeholder-grey-500 "
                id={label}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};

export default TextInput ;