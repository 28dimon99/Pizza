import React from "react";
import s from "./Pizza.module.css"
import PizzaCard from "./PizzaCard";
import * as axios from "axios";




export class Pizza extends React.Component{
    componentDidMount() {
        axios.get(`http://localhost:3000/pizza`).then(response => {
            this.props.getPizza(response.data)
        });
    }

    render() {
        const {pizzas, isReady} = this.props;
        console.log(this.props);
        debugger
        return(
            <div className={s.pizza}>
                {!isReady
                    ? 'Загрузка...'
                    :
                    pizzas && pizzas.map((p, i) => (
                        <PizzaCard key={i} {...p}/>
                    ))}
            </div>
        )
    }
}


export default Pizza