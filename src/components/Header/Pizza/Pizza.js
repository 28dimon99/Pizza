import React from "react";
import s from "./Pizza.module.css"
import PizzaCard from "./PizzaCard";
import * as axios from "axios";



export class Pizza extends React.Component{
    componentDidMount() {
        const {getPizzaAC} = this.props;
        axios.get(`http://localhost:3000/pizza`).then(response => {
            getPizzaAC(response.data)
        });
    }

    render() {
        const {pizza, isReady} = this.props;
        console.log(this.props);
        return(
            <div className={s.pizza}>
                {!isReady
                    ? 'Загрузка...'
                    :
                    pizza && pizza.map((p, i) => (
                        <PizzaCard key={i} {...p}/>
                    ))}
            </div>
        )
    }
}




export default Pizza