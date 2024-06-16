import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

function FetchItems() {
  const dispatch = useDispatch();
  const fetchDone = useSelector((store) => store.fetchStatus.fetchDone);
  const fetching = useSelector((store) => store.fetchStatus.fetching);

  useEffect(() => {
    if (fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchStart());
    fetch("http://localhost:8080/items", { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchEnd());
        dispatch(itemsActions.addInitialItems(data.items[0]));
        dispatch;
      });
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return <div></div>;
}

export default FetchItems;
