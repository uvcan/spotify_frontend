const PasswordInput=({label,placeholder,value,setValue})=>{
    return(
        <div className="PasswordInputDiv flex flex-col space-y-2 w-full">
            <label for={label} className="font-semibold">
            {label}
            </label>
            <input 
                type="password" 
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

export default PasswordInput ;