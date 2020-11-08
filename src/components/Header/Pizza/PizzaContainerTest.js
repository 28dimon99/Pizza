/*
import React from "react";
import PizzaTest from "./PizzaTest";
import * as axios from "axios";
import {setPizzaAC} from "../../../redux/pizzaReducer";
import {connect} from "react-redux";


class PizzaContainerTest extends React.Component{
    componentDidMount() {
        axios.get(`http://localhost:3000/pizzas`).then(response => {
            this.props.setPizzaAC(response.data)
        });
    }

    render() {
        debugger
        return(
            <div>
                <PizzaTest {...this.props}  pizzas={this.props.pizzas}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    pizzas: state.pizzaReducer.pizzas
});
const mapDispatchToProps = (dispatch)=>({
     setPizzaAC: pizzas => dispatch(setPizzaAC(pizzas))
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainerTest)

*/
