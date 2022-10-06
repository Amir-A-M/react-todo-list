import React from 'react';

function Textarea({name, label, value = '', onChange}) {
    return (
        <div className="px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                {label}
            </label>
            <textarea
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 
                                leading-6 focus:outline-none focus:bg-white focus:border-gray-400"
                id={name} name={name} value={value} onChange={onChange}/>
        </div>
    );
}

export default Textarea;