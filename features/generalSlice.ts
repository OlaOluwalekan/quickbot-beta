import { createSlice } from '@reduxjs/toolkit'

interface stateProps {
  theme: 'cupcake' | 'dracula' | 'light' | 'black'
}

const initialSate: stateProps = {
  theme: 'light',
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

export default generalSlice.reducer
