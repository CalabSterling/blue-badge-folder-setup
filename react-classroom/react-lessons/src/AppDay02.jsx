import './App.css';
import PresidentParent from './components/Day02-challenge/Presidents/PresidentParent';
import ClickCounter from './components/Day02-challenge/ClickCounter/ClickCounter';

function App() {
  const welcomeName = "Sterling";

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      {/*<PresidentParent />*/}
      <ClickCounter />
    
      
    </div>
  );
}

export default App;