import React from 'react';
import ReactDOM from 'react-dom';
import "./resources/css/app.css"
import Routes from './Routes';
import {firebase} from "./firebase"


const App=props=>{
  return(
    <Routes {...props} />
  )
}



firebase.auth().onAuthStateChanged(user=>{
  ReactDOM.render(<App user={user} />,document.getElementById('root'));
})