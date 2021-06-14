import React from 'react';

import {Switch,Route,BrowserRouter} from "react-router-dom"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Signin from './components/Signin';
import Dashboard from './components/Admin/Dashboard';
import AuthGuard from './HOC/Auth';

const Routes = ({user}) => {
  return (
    <BrowserRouter>
    <Header user={user}/>
      <Switch>
        <Route path="/dashboard" exact component={AuthGuard(Dashboard)} />
        <Route path="/sign_in" exact component={props=><Signin {...props} user={user}/>}/>
        <Route path="/" exact component={Home}/>
      </Switch>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
