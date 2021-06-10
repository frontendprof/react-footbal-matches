import React from 'react';
import ReactDOM from 'react-dom';
import "./Resources/css/app.css"
import Routes from './Routes';
import {firebase} from "./firebase"


const App=props=>{
  return(
    <Routes {...props} />
  )
}



firebase.auth().onAuthStateChanged(user=>{
  console.log(user);
  ReactDOM.render(<App user={user} />,
    document.getElementById('root')
  );
})