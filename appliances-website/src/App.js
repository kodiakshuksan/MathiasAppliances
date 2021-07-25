import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './components/HomePage/landingPage';
import StoreInfo from "./components/StoreInfoPage/storeInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/LandingPage" component={LandingPage} />
        <Route exact path="/StoreInfo" component={StoreInfo} />
      </div>
    </Router>
     
        
      </header>
    </div>
  );
}

export default App;
