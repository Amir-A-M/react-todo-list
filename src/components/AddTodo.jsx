import React, { useState } from 'react';
import { ACTIONS } from '../config';
import Input from './common/Input';
import Textarea from './common/Textarea';
import { STATUS } from './../config';

function AddTodo({ dispatch }) {

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        status: STATUS.inprogress
    });

    const [error, setError] = useState({});

    const validate = (name, value) => {
        let result = null;

        switch (name) {
            case 'title':
                if (!value) {
                    result = { [name]: 'لطفا عنوان را وارد کنید' };
                }
                break;

            default:
                result = null;
        }

        setError({ ...result || {} });
        return result;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        validate(name, value);
        setTodo({ ...todo, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate('title', todo.title)) {
            return;
        }

        dispatch({ type: ACTIONS.ADD_TODO, payload: todo });

        setTodo({
            title: '',
            description: '',
            status: STATUS.inprogress
        });
    }

    return (
        <article className='bg-white rounded-lg overflow-hidden shadow-[5px_5px_0_3px] relative flex flex-col justify-between'>
            <div className="p-5 px-3">
                <Input label="عنوان" value={todo.title} placeholder="خرید هندوانه" name="title" onChange={handleChange} error={error} require />
                <Textarea label='توضیحات' value={todo.description} name='description' onChange={handleChange} />
            </div>
            <button className='text-center p-2 bg-green-400 active:scale-125 transition-transform'
                onClick={handleSubmit}>
                ثبت</button>
        </article>
    );
}

export default AddTodo;