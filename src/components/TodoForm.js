import React, { useState } from 'react'

const TodoForm = () => {
    const [value, setValue] = useState("");

    const handleSubmit = ()=>{
        
    }

    return (
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input type='text' className='todo-input'
                 placeholder='What is the task today?' value={value} onChange={(e)=> setValue(e.target.value)} />
                <button type='submit' className='todo-btn'>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm