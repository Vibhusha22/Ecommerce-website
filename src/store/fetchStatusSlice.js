import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name:'fetchStatus',
  initialState: {
    fetchDone:false,
    fetching:false,
  },
  reducers:{
    markFetchDone:(state)=>{
       state.fetchDone=true;
    },
    markFetchStart:(state)=>{
       state.fetching=true;
    },
    markFetchEnd:(state)=>{
       state.fetching=false;
    }
  }
})
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;

