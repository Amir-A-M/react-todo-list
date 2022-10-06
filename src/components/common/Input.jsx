import React from 'react';

function Input({ name, label, value = '', placeholder, error, onChange, require }) {
    return (
        <div className="px-3 mb-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                {label}
                {require && <span className="text-red-500"> *</span>}
            </label>
            <input
                className={`appearance-none block w-full bg-gray-100 text-gray-700 border ${(error && error[name]) ? 'border-red-500' : 'border-gray-100'} rounded py-3 px-4 
                                leading-6 focus:outline-none focus:bg-white focus:border-gray-400`}
                id={name} name={name} type="text" placeholder={placeholder} value={value} onChange={onChange} />
            {(error && error[name]) && <p className="text-red-500 text-xs italic pr-1 pt-1">{error[name]}</p>}
        </div>
    );
}

export default Input;