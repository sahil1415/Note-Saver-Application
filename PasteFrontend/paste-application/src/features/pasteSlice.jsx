import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

// In this project we are using local storage 
// so we are storing all the past available in the local storage

const initialState = {
  pastes: []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    setGlobalPastes: (state, action) => {
      state.pastes = action.payload; // Set the pastes data from the API response
    },
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste); // added in the state
      toast.success("paste created");
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if(index >= 0){
        state.pastes[index] = paste;
        toast.success("paste updated");
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
    },
    removeFromPaste: (state, action) => {
      const pasteId = action.payload;
      state.pastes = state.pastes.filter((item) => item._id !== pasteId);
      toast.success("Paste deleted");
    }
  },
})

// Action creators are generated for each case reducer function
export const { setGlobalPastes, addToPastes, updateToPastes, resetAllPastes, removeFromPaste} = pasteSlice.actions

export default pasteSlice.reducer