import React, { useReducer } from 'react';
import TodoCard from './TodoCard';

const initialState = [
    {
        title: 'خرید هندوانه',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        status: 'success'
    },
    {
        title: 'خرید هندوانه',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        status: 'inprogress'
    },
    {
        title: 'خرید هندوانه',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        status: 'canceled'
    }
];

export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    CHANGE_STATUS: 'CHANGE_STATUS'
}

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_TODO:
            return [...state, payload.todo];

        case ACTIONS.REMOVE_TODO:
            return state.filter((todo) => todo !== payload.todo);

        default:
            return state;
    }
}

function TodoList(props) {
    const [todos, dispatch] = useReducer(reducer, initialState);

    return (
        <section className='grid grid-cols-4 gap-7'>
            {todos.map((todo, i) => <TodoCard key={i} todo={todo} dispatch={dispatch} />)}
        </section>
    );
}

export default TodoList;