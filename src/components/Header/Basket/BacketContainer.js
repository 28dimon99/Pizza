/*
import React from "react"
import {connect} from "react-redux";
import BasketComponent from "./Basket";
import {removeFromBasketAC} from "../../../redux/cardReducer";





const BasketContainer =(props)=>{
    return(
        <div>
            <BasketComponent {...props}/>
        </div>
    )
};
 const mapStateToProps =(state)=>({
     addedCount:
         state.cardReducer.items.reduce((count, p)=> count + (p.id === state.id ? 1 : 0),0),
 });



 const mapDispathToProps = (dispath)=>({
     addToCard: obj => dispatch(addToBasketAC(obj)),
     removeFromBasketAC: id => dispatch (removeFromBasketAC(id))
 });


export default  connect(mapStateToProps, mapDispathToProps)(BasketContainer)*/
