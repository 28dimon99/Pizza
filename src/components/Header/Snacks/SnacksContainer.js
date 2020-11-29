import React, {useEffect} from 'react'
import {connect} from "react-redux";
import * as axios from "axios";
import Snacks from "./Snacks";
import {setSnacksAC} from "../../../redux/snacksReducer";


const SnacksContainer = (props) => {
    useEffect(() => {
        axios.get(`http://localhost:3000/snacks`)
            .then(response => {
                props.setSnacksAC(response.data)
            })
    }, []);
    return (
        <div>
            <Snacks {...props} snacks={props.snacks}/>
        </div>
    )
};


const mapStateToProps = (state) => ({
        snacks: state.snacksReducer.snacks,
        isReady: state.snacksReducer.isReady
});

const mapDispatchToProps = (dispatch) => ({

    setSnacksAC: snacks => dispatch(setSnacksAC(snacks))
});

export default connect(mapStateToProps, mapDispatchToProps)(SnacksContainer)