import './App.css';
import Header  from './components/Day1-challenge/Header'
import AboutMe from './components/Day1-challenge/AboutMe'
import StudentInformation from './components/Day1-challenge/StudentInformation';
import Footer from './components/Day1-challenge/Footer';


function App() {
  const welcomeName = "Sterling";

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      <h2>We just modified our root app component</h2>
      <Header/>
      <AboutMe/>
      <StudentInformation studentName="Pam" grade="A" subject="Math"/>
      <StudentInformation studentName="Tom" grade="A-" subject="Language Arts"/>
      <StudentInformation studentName="Alli" grade="A+" subject="Calculus III"/>
      <Footer/>
    </div>
  );
}

export default App;
