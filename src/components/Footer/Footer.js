import React from "react";
import s from "./Footer.module.css"
import youtubeImg from "../../Images/Footer/youtubeImg.png"
import facebookImg from "../../Images/Footer/facebookImg.png"




export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.icons}>
                <a href="/"></a><img src={youtubeImg} alt="youtube"/><a/>
                <a href="/"></a><img src={facebookImg} alt="facebook"/><a/>
            </div>


            <p>
                © 2019 gogopizza.by.
                УНП 591003127 ООО «ВелМаксЮнион»
                Заказать: +375 (29) 555-1-666
                info@gogopizza.by
            </p>

        </div>
    )
};



