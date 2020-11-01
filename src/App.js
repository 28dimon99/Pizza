import React from 'react';

import s from "./App.module.css"
import Content from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {Redirect, Route, Switch,} from "react-router-dom";
import PizzaContainer from "./components/Header/Pizza/PizzaContainer";
import Header from "./components/Header/Header";






 const App = () => {

         return (
             <div className={s.App}>
                 <Header/>
                 <Switch>
                     <Route exact path="/main" component={Content}/>
                     <Route exact path="/pizza"
                            render={() =>
                                <PizzaContainer />}/>
                     <Redirect from="/" to="/main"/>
                 </Switch>
                 <Footer/>
             </div>
         );
     };



export default App;
