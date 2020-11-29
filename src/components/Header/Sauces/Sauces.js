import React from "react";
import s from "../lowHeaderCard.module.css"
import Prelouder from "../../common/Prelouder/Prelouder";
import SaucesCard from "./SaucesCard";


const Sauces = (props) => {

    return (

        <div className={s.cardGoods}>
            {!props.isReady
                ? <Prelouder/>
                :
                props.sauces && props.sauces.map((sauces, i) => (
                    <SaucesCard key={i} sauces={sauces}/>
                ))
            }
        </div>
    );
};
export default Sauces
