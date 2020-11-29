import React from "react";
import s from "../lowHeaderCard.module.css"
import Prelouder from "../../common/Prelouder/Prelouder";
import DrinksCard from "./DrinksCard";


const Drinks = (props) => {

    return (

        <div className={s.cardGoods}>
            {!props.isReady
                ? <Prelouder/>
                :
                props.drinks && props.drinks.map((drinks, i) => (
                    <DrinksCard key={i} drinks={drinks}/>
                ))
            }
        </div>
    );
};
export default Drinks
