// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from './components/Resume';

// import './App.css'

function App() {
  const [pageSelected, setPageSelected] = useState ('home');
  function getPage() {
    if(pageSelected === "about" || pageSelected === "home") {
      return <About></About>;
    }
    else if (pageSelected === "portfolio") {
      return <Portfolio></Portfolio>;
    }
    else if (pageSelected === "resume"){
      return <Resume></Resume>;
    }
    else if (pageSelected === "contact") {
      return <Contact></Contact>;
    }
    
    
  }
  return (
    <div className="App">
      <div className="app-content">
        <Nav pageSel={setPageSelected} selPage={pageSelected}></Nav>

        {getPage()}
      </div>
    </div>
  );
}

export default App;
