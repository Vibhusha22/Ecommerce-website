import {createSlice} from "@reduxjs/toolkit";
const itemsSlice = createSlice({
  name:'items',
  initialState: [],
  reducers:{
    addInitialItems:(state,action)=>{
      console.log(action.payload);
      return  action.payload;
    }
  }
})
export const itemsActions = itemsSlice.actions;
export default itemsSlice;

