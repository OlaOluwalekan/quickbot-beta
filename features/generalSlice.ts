'use client'

import { addToLocalStorage, getFromLocalStorage } from '@/utils/localStorage'
import { createSlice } from '@reduxjs/toolkit'

interface stateProps {
  // theme: 'cupcake' | 'dracula' | 'light' | 'black'
  theme: string
  themeIsOpen: boolean
  mobileNavIsOpen: boolean
}

const initialSate: stateProps = {
  theme: getFromLocalStorage('theme') || 'light',
  themeIsOpen: false,
  mobileNavIsOpen: false,
}

const generalSlice = createSlice({
  name: 'general',
  initialState: initialSate,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload
      addToLocalStorage('theme', action.payload)
    },
    toggleThemeOpen: (state, { payload }: { payload: boolean }) => {
      state.themeIsOpen = payload
    },
    toggleMobileNav: (state, { payload }) => {
      state.mobileNavIsOpen = payload
    },
  },
})

export const { changeTheme, toggleThemeOpen, toggleMobileNav } =
  generalSlice.actions

export default generalSlice.reducer
