import { createSlice } from '@reduxjs/toolkit'

interface stateProps {
  theme: 'cupcake' | 'dracula' | 'light' | 'black'
  themeIsOpen: boolean
}

const initialSate: stateProps = {
  theme: 'dracula',
  themeIsOpen: false,
}

const generalSlice = createSlice({
  name: 'general',
  initialState: initialSate,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload
    },
    toggleThemeOpen: (state, { payload }: { payload: boolean }) => {
      // if (payload) {
      state.themeIsOpen = payload
      // } else {
      //   state.themeIsOpen = !state.themeIsOpen
      // }
    },
  },
})

export const { changeTheme, toggleThemeOpen } = generalSlice.actions

export default generalSlice.reducer
