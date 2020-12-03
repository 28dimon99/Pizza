import React, {useEffect} from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import Sauces from "./Sauces";
import {setSaucesAC} from "../../../redux/saucesReducer";


const SaucesContainer = (props) => {
    useEffect(()=>{
        axios.get(`http://localhost:3000/sauces`)
            .then(response => {
                props.setSauces(response.data)
            })
    },[]);
    return (
        <div>
            <Sauces {...props} pizzas={props.sauces}/>
        </div>
    )

};

const mapStateToProps = (state, /*{id}*/) => ({
    sauces: state.saucesReducer.sauces,
    isReady: state.saucesReducer.isReady,
    /*addedCount: state.cardReducer.items.reduce((count, p) => count + (p.id === id ? 1: 0), 0),*/
});
const mapDispatchToProps = (dispatch) => ({
    setSauces: sauces => dispatch(setSaucesAC(sauces)),
    /* addToBasketAC: obj => dispatch(addToBasketAC(obj)),
     removeFromBasketAC: id => dispatch (removeFromBasketAC(id))*/

});

export default connect(mapStateToProps, mapDispatchToProps)(SaucesContainer)

