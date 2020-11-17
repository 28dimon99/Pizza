import React, {useEffect} from "react";
import Pizza from "./Pizza";
import * as axios from "axios";
import {setPizzaAC} from "../../../redux/pizzaReducer";
import {connect} from "react-redux";


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

const mapStateToProps = (state) => ({
    pizzas: state.pizzaReducer.pizzas,
    isReady: state.pizzaReducer.isReady
});
const mapDispatchToProps = (dispatch) => ({
    setPizzaAC: pizzas => dispatch(setPizzaAC(pizzas))
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer)

