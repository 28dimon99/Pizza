import React from "react";
import Pizza from "./Pizza";
import {getPizzaAC} from "../../../redux/pizzaReducer";
import {connect} from "react-redux";



const mapStateToProps = (state)=>({

    pizza: state.pizzaReducer.pizzas,
    isReady: state.pizzaReducer.isReady,

});

const mapDispatchToProps = (dispatch) => ({
    getPizza: pizzas => dispatch(getPizzaAC(pizzas)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Pizza);