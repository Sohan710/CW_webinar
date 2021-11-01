import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/register';


function App() {
  return (
    
    <>
      <Router>
        <div className="container-fluid">
          <div class="row">
            <div className="col-sm-8">
              <Navbar />
            </div>
            <div className="col-sm-4 " >
              
            </div>
          </div>
        </div>
            
        
        
        <Switch>
          <Route path='/' exact component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
