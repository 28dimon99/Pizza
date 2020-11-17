import React from "react";
import s from "../lowHeaderCard.module.css"
import PizzaCard from "./PizzaCard";


const Pizza = (props) => {

    return (

        <div className={s.cardGoods}>
            {!props.isReady
                ? 'Загрузка...'
                :
                props.pizzas && props.pizzas.map((pizzas, i) => (
                    <PizzaCard key={i} pizzas={pizzas}/>
                    ))
            }

        </div>
    );
};
export default Pizza
