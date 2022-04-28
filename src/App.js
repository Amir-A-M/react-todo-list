import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='p-12'>
      <Header />
      <main className="mt-20">
        <TodoList/>
      </main>
    </div>
  );
}

export default App;