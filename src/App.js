import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';



const HatsPage = () => (

  <div>
    <h1>Hats PAGE</h1>
  </div>
  );



/*
const TopicsList = () => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

const TopicDetails = () => {
  return (
    <div>
      <h1>TOPIC DETAILS PAGE</h1>
    </div>
  );
};


*/
function App() {
  return (
    <div>
    <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route exact path='/hats' component={HatsPage}/>
     </Switch>
    </div>
  );
}

export default App;
  