import React, { useReducer } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { countReducer, fetchUserById } from "./store/count.reducer";
import axios from "axios";
import { countActions } from "./store";

function App(props) {
  const dispatch = useDispatch();
  const { count, data, status } = useSelector((store) => store.count);

  const handleClick = () => {
    // dispatch(fetchUserById());
    // console.log(fetchUserById.fulfilled);
    dispatch(countActions.setDataAsync());
  };

  return (
    <div className="App">
      {/* <h1>count: {JSON.stringify(count.count)}</h1> */}

      <button onClick={handleClick}>증가!</button>

      {!!data && <div>{JSON.stringify(data)}</div>}
      <p>{status}</p>
    </div>
  );
}

export default App;
