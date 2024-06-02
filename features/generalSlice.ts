'use client'

import { addToLocalStorage, getFromLocalStorage } from '@/utils/localStorage'
import { createSlice } from '@reduxjs/toolkit'

interface stateProps {
  // theme: 'cupcake' | 'dracula' | 'light' | 'black'
  theme: string
  themeIsOpen: boolean
  mobileNavIsOpen: boolean
  profileDialogIsOpen: boolean
  isLoading: boolean
  conversationIds: string[]
}

const initialSate: stateProps = {
  theme: getFromLocalStorage('theme') || 'light',
  themeIsOpen: false,
  mobileNavIsOpen: false,
  profileDialogIsOpen: false,
  isLoading: false,
  conversationIds: [],
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
    toggleProfileDialog: (state, { payload }) => {
      state.profileDialogIsOpen = payload
    },
    toggleLoading: (state, { payload }: { payload: boolean }) => {
      state.isLoading = payload
    },
    addConversationId: (state, { payload }: { payload: string }) => {
      state.conversationIds.push(payload)
    },
  },
})

export const {
  changeTheme,
  toggleThemeOpen,
  toggleMobileNav,
  toggleProfileDialog,
  toggleLoading,
  addConversationId,
} = generalSlice.actions

export default generalSlice.reducer
