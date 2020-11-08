import React from "react";
import Pizza from "./Pizza";

import {connect} from "react-redux";
import {setPizzaAC} from "../../../redux/pizzaReducer";


const mapStateToProps = (state) => ({
    pizza: state.pizzaReducer.pizzas,
    isReady: state.pizzaReducer.isReady,

});

const mapDispatchToProps = (dispatch) => ({
    setPizzaAC: pizzas => dispatch(setPizzaAC(pizzas)),

});


export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
