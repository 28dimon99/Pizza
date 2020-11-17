import React from "react";
import s from "../lowHeaderCard.module.css"
import PancakesCard from "../../../redux/pancakesReducer";



const Pancakes = (props) => {
    
    return (

        <div className={s.cardGoods}>
            {!props.isReady
                ? 'Загрузка...'
                :
                props.pancakes && props.pancakes.map((pancakes, i) => (
                    <PancakesCard key={i} pancakes={pancakes}/>
                ))
            }

        </div>
    );
};
export default Pancakes
