import React from "react";
import s from "../lowHeaderCard.module.css"
import PancakesCard from "./PancakesCard";
import Prelouder from "../../common/Prelouder/Prelouder";



const Pancakes = (props) => {

    return (

        <div className={s.cardGoods}>
            {!props.isReady
                ? <Prelouder/>
                :
                props.pancakes && props.pancakes.map((pancakes, i) => (
                    <PancakesCard key={i} pancakes={pancakes}/>
                ))
            }

        </div>
    );
};
export default Pancakes
