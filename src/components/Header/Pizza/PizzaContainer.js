import React from "react";
import Pizza from "./Pizza";
import {getPizzaAC} from "../../../redux/pizzaReducer";
import {connect} from "react-redux";



const mapStateToProps = (state)=>({

    pizza: state.pizzaReducer.pizza,
    isReady: state.pizzaReducer.isReady,

});

const mapDispatchToProps = (dispatch) => ({
    getPizzaAC: (pizza) => dispatch(getPizzaAC(pizza)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Pizza);