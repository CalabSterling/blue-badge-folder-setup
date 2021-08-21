import React from "react";

import "./App.css";
//import UseEffectPractice from "./components/Day04-Challenge/UseEffectPractice/UseEffectPractice";
//import ChuckFetch from "./components/Day04-Challenge/ChuckFetch";
import MortyParent from "./components/Day04-Challenge/MortyFetch/MortyParent";


function App() {
  // This is a comment
  const welcomeName = "Sterling";

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      <MortyParent />
      {/*<UseEffectPractice />
      <ChuckFetch />*/}
    </div>
  );
}

export default App;
