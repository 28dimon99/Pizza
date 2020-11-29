import React from "react"
import s from "../lowHeaderCard.module.css";
import SetsCard from "./SetsCard";
import Prelouder from "../../common/Prelouder/Prelouder";




const Sets = (props) =>{
    return(
        <div className={s.cardGoods}>
            {!props.isReady
                ? <Prelouder/>
                :
                props.sets && props.sets.map((sets, i) => (
                    <SetsCard key={i} sets={sets}/>
                ))
            }

        </div>
    )
};

export default Sets