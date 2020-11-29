import React, {useEffect} from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setDrinksAC} from "../../../redux/drinksReducer";
import Drinks from "./Drinks";


const DrinksContainer = (props) => {
    useEffect(()=>{
        axios.get(`http://localhost:3000/drinks`)
            .then(response => {
                props.setDrinksAC(response.data)
            })
    },[]);
    return (
        <div>
            <Drinks {...props} drinks={props.drinks}/>
        </div>
    )

};

const mapStateToProps = (state, /*{id}*/) => ({
    drinks: state.drinksReducer.drinks,
    isReady: state.drinksReducer.isReady,
    /*addedCount: state.cardReducer.items.reduce((count, p) => count + (p.id === id ? 1: 0), 0),*/
});
const mapDispatchToProps = (dispatch) => ({
    setDrinksAC: drinks => dispatch(setDrinksAC(drinks)),
    /* addToBasketAC: obj => dispatch(addToBasketAC(obj)),
     removeFromBasketAC: id => dispatch (removeFromBasketAC(id))*/

});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksContainer)

