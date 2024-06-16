import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./BagSlice";

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bagItems: bagSlice.reducer,
  }
});

export default store;