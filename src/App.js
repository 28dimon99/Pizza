import React from 'react';
import s from "./App.module.css"
import Content from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {Redirect, Route, Switch,} from "react-router-dom";
import PizzaContainer from "./components/Header/Pizza/PizzaContainer";
import SetsContainer from "./components/Header/Sets/SetsContainer";
import PancakesContainer from "./components/Header/Pancakes/PancakesContainer";
import SnacksContainer from "./components/Header/Snacks/SnacksContainer";
import DessertsContainer from "./components/Header/Desserts/DessertsContainer";
import SaucesContainer from "./components/Header/Sauces/SaucesContainer";
import DrinksContainer from "./components/Header/Drinks/DrinksContainer";
import Basket from "./components/Header/Basket/Basket";
import HeaderContainer from "./components/Header/HeaderContainer";








 const App = () => {

         return (
             <div className={s.App}>
                 <HeaderContainer/>
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

                     <Route exact path="/snacks"
                            render={() =>
                                <SnacksContainer />}/>
                     <Route exact path="/desserts"
                            render={() =>
                                <DessertsContainer />}/>
                     <Route exact path="/sauces"
                            render={() =>
                                <SaucesContainer />}/>
                     <Route exact path="/drinks"
                            render={() =>
                                <DrinksContainer />}/>


                     <Route exact path="/basket"
                            render={() =>
                                <Basket/>}/>

                     <Redirect from="/" to="/main"/>
                 </Switch>
                 <Footer/>
             </div>
         );
     };



export default App;
