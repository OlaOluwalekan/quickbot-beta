import { createSlice } from '@reduxjs/toolkit'

interface stateProps {
  theme: 'cupcake' | 'dracula' | 'light' | 'black'
}

const initialSate: stateProps = {
  theme: 'dracula',
}

const generalSlice = createSlice({
  name: 'general',
  initialState: initialSate,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export const { changeTheme } = generalSlice.actions

export default generalSlice.reducer
