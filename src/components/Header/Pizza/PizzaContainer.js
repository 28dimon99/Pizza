import React, {useEffect} from "react";
import Pizza from "./Pizza";
import * as axios from "axios";
import {setPizzaAC} from "../../../redux/pizzaReducer";
import {connect} from "react-redux";
import {addToBasketAC} from "../../../redux/basketReducer";



const PizzaContainer = (props) => {
    useEffect(()=>{
        axios.get(`http://localhost:3000/pizzas`)
            .then(response => {
                props.setPizzaAC(response.data)
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
    addedCount: state.basketReducer.items.reduce((count, pizza) => count + (pizza.id === id ? 1: 0), 0)
});
const mapDispatchToProps = (dispatch) => ({
    setPizzaAC: pizzas => dispatch(setPizzaAC(pizzas)),
    addToBasketAC: obj => dispatch(addToBasketAC(obj)),





});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer)

