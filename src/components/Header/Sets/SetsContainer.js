import React, {useEffect} from "react";
import * as axios from "axios";
import Sets from "./Sets";
import {connect} from "react-redux";
import {setSetsAC} from "../../../redux/setsReducer";




const SetsContainer = (props) =>{
    useEffect(()=>{
        axios.get(`http://localhost:3000/sets`)
            .then(response => {
                props.setSetsAC(response.data)
            })
    },[]);
    return(
        <div>
           <Sets {...props} sets={props.sets}/>
        </div>
    )

};

const mapStateToProps =(state) =>({
    sets: state.setsReducer.sets,
    isReady: state.setsReducer.isReady
});
const mapDispatchToProps = (dispatch) =>({
    setSetsAC: sets => dispatch(setSetsAC(sets))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetsContainer) ;