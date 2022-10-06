import React from 'react';
import { ACTIONS } from '../config';

function TodoCard({ todo, dispatch }) {
    const {title, description, status} = todo;
    
    return (
        <article className='bg-white rounded-lg overflow-hidden shadow-[5px_5px_0_3px] relative flex flex-col justify-between'>
            <div className="p-7">
                <h2 className='text-2xl font-bold mb-5 leading-6'>{title}</h2>
                <p className='leading-7 text-gray-700'>
                    {description}
                </p>
            </div>
            <button className={`text-center p-2 ${status.color} active:scale-125 transition-transform`}
            onClick={() => dispatch({ type: ACTIONS.CHANGE_STATUS, payload: todo })}>{status.title}</button>
            <button className='py-1 px-1 rounded-br-lg absolute top-0 left-0'
                onClick={() => dispatch({ type: ACTIONS.REMOVE_TODO, payload: todo })}
            >❌</button>
        </article>
    );
}

export default TodoCard;