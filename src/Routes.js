import React from 'react';

import {Switch,Route,BrowserRouter} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Footer from './components/Footer'
import Home from './components/Home'
import Signin from './components/Signin';

const Routes = ({user}) => {
  return (
    <BrowserRouter>
    <Header user={user}/>
      <Switch>
        <Route path="/sign_in" exact component={Signin}/>
        <Route path="/" exact component={Home}/>
      </Switch>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
