import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, removeTodo, clearTodo } from "./features/todoSlice"

const Todo = () => {
    // variable for the items to add to our list
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [ input, setInput ] = useState('')

    // function to remove an item from the list
    const renderItems = items.map((item, index) => 
        <li key={index} onClick={() => dispatch(removeTodo(index))}>
            {item}
        </li>)

    const addItem = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        document.getElementById('addItem').value = ''
    }
    
    return (
        <div>
            <ul>
                {renderItems}
            </ul>
            <form onSubmit={(e) => addItem(e)}>
                <input id='addItem' type='text' onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Add Item</button>
            </form>
            <button onClick={() => dispatch(clearTodo())}>Clear Items</button>
        </div>
    )
}

export default Todo