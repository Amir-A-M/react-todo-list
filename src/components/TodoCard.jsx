import React from 'react';
import useStatus from '../hooks/useStatus';
import { ACTIONS } from './TodoList';

function TodoCard({ todo, dispatch }) {
    const status = useStatus(todo.status);

    return (
        <article className='bg-white rounded-lg overflow-hidden shadow-[5px_5px_0_3px] relative'>
            <div className="p-7">
                <h2 className='text-2xl font-bold mb-3'>{todo.title}</h2>
                <p>
                    {todo.description}
                </p>
            </div>
            <button className={`text-center w-full p-2 ${status.color}`}>{status.title}</button>
            <button className='py-1 px-1 rounded-br-lg absolute top-0 left-0' onClick={()=>dispatch({type:ACTIONS.REMOVE_TODO, payload:{todo}})}>❌</button>
        </article>
    );
}

export default TodoCard;