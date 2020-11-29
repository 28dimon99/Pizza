import React, {useEffect} from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setDessertsAC} from "../../../redux/dessertsReducer";
import Desserts from "./Desserts";


const DessertsContainer = (props) => {
    useEffect(()=>{
        axios.get(`http://localhost:3000/desserts`)
            .then(response => {
                props.setDessertsAC(response.data)
            })
    },[]);
    return (
        <div>
            <Desserts {...props} desserts={props.desserts}/>
        </div>
    )

};

const mapStateToProps = (state, /*{id}*/) => ({
    desserts: state.dessertsReducer.desserts,
    isReady: state.dessertsReducer.isReady,
    /*addedCount: state.cardReducer.items.reduce((count, p) => count + (p.id === id ? 1: 0), 0),*/
});
const mapDispatchToProps = (dispatch) => ({
    setDessertsAC: desserts => dispatch(setDessertsAC(desserts)),
    /* addToBasketAC: obj => dispatch(addToBasketAC(obj)),
     removeFromBasketAC: id => dispatch (removeFromBasketAC(id))*/

});

export default connect(mapStateToProps, mapDispatchToProps)(DessertsContainer)



