import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {},
  reducers: {
    abc: (state, /* action */) => {
      state
    }
  }
})

// Action creators are generated for each case reducer function
export const { abc } = todoSlice.actions
