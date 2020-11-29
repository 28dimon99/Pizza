import React from "react"
import Prelouder from "../../common/Prelouder/Prelouder";
import SnacksCard from "./SnacksCard";
import s from "../lowHeaderCard.module.css";



const Snacks =(props)=>{
    const {isReady, snacks} = props;
    return(
        <div className={s.cardGoods}>
            {
                !isReady
                ?
                    <Prelouder/>
                :
                    snacks && snacks.map((snacks, i)=>(
                        <SnacksCard key={i} snacks={snacks}/>
                        ))
            }
        </div>
    )
};

export default Snacks