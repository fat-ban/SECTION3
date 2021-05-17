import React, {Component} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './composants/Header'
import Contacts from './composants/Contacts'
//import {Button, Alert} from 'react-bootstrap';


//import { FacebookLoginButton} from "react-social-login-buttons"
class App extends Component{
  render(){
    return (
    <div className="App">
      <Header/>
      <div className="container">
        <Contacts/>
      </div>
    </div>
    )
    }
}


export default App;
