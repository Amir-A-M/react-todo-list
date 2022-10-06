import React, { useEffect, useReducer } from 'react';
import AddTodo from './AddTodo';
import TodoCard from './TodoCard';
import { ACTIONS, STATUS } from '../config';

const initialState = [
    {
        index: 0,
        title: 'خرید هندوانه',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        status: STATUS.success
    },
    {
        index: 1,
        title: 'خرید هندوانه',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        status: STATUS.inprogress
    },
    {
        index: 2,
        title: 'خرید هندوانه',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        status: STATUS.canceled
    }
];

function todoReducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_TODO:
            return [...state, payload];

        case ACTIONS.REMOVE_TODO:
            return state.filter((todo) => todo !== payload);

        case ACTIONS.CHANGE_STATUS:
            const index = state.findIndex((todo) => todo === payload);
            let newState = [...state];
            switch (payload.status) {
                case STATUS.success:
                    newState[index].status = STATUS.canceled;
                    return [
                        ...newState
                    ]

                case STATUS.inprogress:
                    newState[index].status = STATUS.success;
                    return [
                        ...newState
                    ]

                case STATUS.canceled:
                    newState[index].status = STATUS.inprogress;
                    return [
                        ...newState
                    ]

                default:
                    return state;
            }

        default:
            return state;
    }
}

function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <section className='grid grid-cols-4 gap-7 items-start'>
            <AddTodo dispatch={dispatch} />
            {todos.map((todo, i) => <TodoCard key={i} todo={todo} dispatch={dispatch} />)}
        </section>
    );
}

export default TodoList;