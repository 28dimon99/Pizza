import React, {useEffect} from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setPancakesAC} from "../../../redux/pancakesReducer";
import Pancakes from "./Pancakes";


const PancakesContainer = (props) => {
    useEffect(()=>{
        axios.get(`http://localhost:3000/pancakes`)
            .then(response => {
                props.setPancakes(response.data)
            })
    },[]);
    return (
        <div>
            <Pancakes {...props} pancakes={props.pancakes}/>
        </div>
    )

};

const mapStateToProps = (state) => ({
    pancakes: state.pancakesReducer.pancakes,
    isReady: state.pancakesReducer.isReady,

});
const mapDispatchToProps = (dispatch) => ({
    setPancakes: pancakes => dispatch(setPancakesAC(pancakes))
});

export default connect(mapStateToProps, mapDispatchToProps)(PancakesContainer)

