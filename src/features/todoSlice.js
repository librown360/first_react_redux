import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        return { items: [...state.items, action.payload] }
    },
    removeTodo: (state, action) => {
        let list = [...state.items]
        let index = action.payload
        if(index !== -1) {
            list.splice(index, 1)
            return { items: list }
        }
    },
    clearTodo: () => {
        return { items: [] }
    }
  }
})

export const { addTodo, removeTodo, clearTodo } = todoSlice.actions

export default todoSlice.reducer