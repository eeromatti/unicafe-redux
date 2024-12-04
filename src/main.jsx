import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./reducer"; // Only import the reducer once

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

const App = () => {
  const good = () => store.dispatch({ type: "GOOD" });
  const ok = () => store.dispatch({ type: "OK" });
  const bad = () => store.dispatch({ type: "BAD" });
  const reset = () => store.dispatch({ type: "ZERO" });

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good {store.getState().counter.good}</div>
      <div>ok {store.getState().counter.ok}</div>
      <div>bad {store.getState().counter.bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);

export default App;
