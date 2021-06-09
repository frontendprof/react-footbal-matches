import React from 'react';

import {Switch,Route,BrowserRouter} from "react-router-dom"
import Header from "./components/Header";
import Footer from './components/Footer'
import Home from './components/Home'
import Signin from './components/Signin';

const Routes = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/sign_in" exact component={Signin}/>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
