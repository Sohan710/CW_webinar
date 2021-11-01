import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/register';
import PaintIcon from "./images/Webinar-Page.png";
import * as Icon from 'react-bootstrap-icons';
function App() {
  return (

    <>
      <Router>
        <div style={{
          backgroundImage: `url(${PaintIcon})`
        }}>


          <div className="container-fluid">
            <div class="row">

              <div className="col-sm-8">
                <Navbar />
              </div>
              <div className="col-sm-4 " >
                <div className="butt">
                <button class="button">LIVE WEBINAR <Icon.PlayCircleFill /></button>
                </div>
                <p id="t2">13TH NOVEMBER 2021</p>
                <p id="t3">SATURDAY</p>
                <p id="t4">12:00 - 1:00 PM</p>
                <hr
                  style={{
                    color: 'black',
                    height: 1.5,
                    marginTop: -16,
                    width: 610,
                    marginLeft: -20
            
                  }}
                />


              </div>
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
