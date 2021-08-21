import React, { useState, useEffect } from "react";

import "./App.css";
import TenLittleMonkeys from "./components/Day03-challenge/TenLittleMonkeys";
import InputField from "./components/Day03-challenge/InputFieldDemo/InputField";
import Calculator from "./components/Day03-challenge/Calculator/Calculator";

function App() {
  // This is a comment
  const welcomeName = "Sterling";

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      {/*<TenLittleMonkeys />*/}
      {/*<InputField />*/}
      <Calculator />
    </div>
  );
}

export default App;