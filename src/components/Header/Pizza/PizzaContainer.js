import React, {useEffect} from "react";
import Pizza from "./Pizza";
import * as axios from "axios";
import {setPizzaAC} from "../../../redux/pizzaReducer";
import {connect} from "react-redux";
import {addToBasketAC, removeFromBasketAC} from "../../../redux/basketReducer";



const PizzaContainer = (props) => {
    useEffect(()=>{
        axios.get(`http://localhost:3000/pizzas`)
            .then(response => {
                props.setPizza(response.data)
            })
    },[]);
    return (
        <div>
            <Pizza {...props} pizzas={props.pizzas}/>
        </div>
    )

};

const mapStateToProps = (state,id) => ({
    pizzas: state.pizzaReducer.pizzas,
    isReady: state.pizzaReducer.isReady,
    addedCount: state.basketReducer.items.reduce((count, pizza) => count + (pizza.id === id ? 1: 0), 0),

});
const mapDispatchToProps = (dispatch) => ({
    setPizza: pizzas => dispatch(setPizzaAC(pizzas)),
    addToBasket: obj => dispatch(addToBasketAC(obj)),
    removeFromBasket: id => dispatch(removeFromBasketAC(id))





});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer)

