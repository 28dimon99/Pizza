import React from "react"
import {uniqBy} from "lodash";
import {setPizzaAC} from "../../redux/pizzaReducer";
import Header from "./Header";
import {connect} from "react-redux";
import {setPancakesAC} from "../../redux/pancakesReducer";
import {setSnacksAC} from "../../redux/snacksReducer";
import {setDessertsAC} from "../../redux/dessertsReducer";
import {setDrinksAC} from "../../redux/drinksReducer";
import {removeFromBasketAC} from "../../redux/basketReducer";




const HeaderContainer = (props) =>{
    return(
        <div>
            <Header {...props}/>
        </div>
    )
};

const mapStateToProps=(state)=>({

    pizzas: state.pizzaReducer.pizzas,
    pancakes: state.pancakesReducer.pancakes,
    isReady: state.pancakesReducer.isReady,
    snacks: state.snacksReducer.snacks,
    desserts: state.dessertsReducer.desserts,
    drinks: state.drinksReducer.drinks,
    totalPrice: state.basketReducer.items.reduce((total, p) => total + p.price, 0 ),
    count: state.basketReducer.items.length,
    items: uniqBy(state.basketReducer.items, o => o.id)
});
const mapDispatchToProps=(dispatch)=>({
    setPizzaAC: pizzas => dispatch(setPizzaAC(pizzas)),
    setPancakesAC: pancakes => dispatch(setPancakesAC(pancakes)),
    setSnacksAC: snacks => dispatch(setSnacksAC(snacks)),
    setDessertsAC: desserts => dispatch(setDessertsAC(desserts)),
    setDrinksAC: drinks => dispatch(setDrinksAC(drinks)),
    removeFromBasketAC: id => dispatch(removeFromBasketAC(id))





});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);