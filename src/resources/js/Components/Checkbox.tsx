import React, { useState } from "react";
export default function Checkbox({
    name = "",
    title = "",
    className = "",
    onChange = (bool: boolean) => {},
    defaultValue = false,
    ...props
}) {
    const [checked, setChecked] = useState(defaultValue);
    const handleChange = () => {
        setChecked((v) => !v);
        onChange(!checked);
    };

    return (
        <div
            onClick={handleChange}
            className="hover:bg-slate-300 rounded-md p-2 flex items-center justify-items-center"
        >
            <input
                {...props}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className={
                    "rounded mr-2 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 " +
                    className
                }
            />
            <label htmlFor={name}> {title} </label>
        </div>
    );
}
