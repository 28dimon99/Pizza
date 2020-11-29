import React from "react";
import s from "../lowHeaderCard.module.css"
import PizzaCard from "./PizzaCard";
import Prelouder from "../../common/Prelouder/Prelouder";


const Pizza = (props) => {

    return (

        <div className={s.cardGoods}>
            {!props.isReady
                ? <Prelouder/>
                :
                props.pizzas && props.pizzas.map((pizzas, i) => (
                    <PizzaCard key={i} {...props} pizzas={pizzas}/>
                    ))
            }
        </div>
    );
};
export default Pizza
