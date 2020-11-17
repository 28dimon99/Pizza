import React from 'react';
import s from "./App.module.css"
import Content from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {Redirect, Route, Switch,} from "react-router-dom";
import Header from "./components/Header/Header";
import PizzaContainer from "./components/Header/Pizza/PizzaContainer";
import SetsContainer from "./components/Header/Sets/SetsContainer";
import PancakesContainer from "./components/Header/Pancakes/PancakesContainer";







 const App = () => {

         return (
             <div className={s.App}>
                 <Header/>
                 <Switch>
                     <Route exact path="/main" component={Content}/>
                     <Route exact path="/pizzas"
                            render={() =>
                                <PizzaContainer />}/>
                     <Route exact path="/sets"
                            render={() =>
                                <SetsContainer />}/>

                     <Route exact path="/pancakes"
                            render={() =>
                                <PancakesContainer />}/>

                     <Redirect from="/" to="/main"/>
                 </Switch>
                 <Footer/>
             </div>
         );
     };



export default App;
