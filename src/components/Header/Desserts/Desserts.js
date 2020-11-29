import React from "react";
import s from "../lowHeaderCard.module.css"
import Prelouder from "../../common/Prelouder/Prelouder";
import DessertsCard from "./DessertsCard";


const Desserts = (props) => {

    return (

        <div className={s.cardGoods}>
            {!props.isReady
                ? <Prelouder/>
                :
                props.desserts && props.desserts.map((desserts, i) => (
                    <DessertsCard key={i} desserts={desserts}/>
                ))
            }
        </div>
    );
};
export default Desserts
