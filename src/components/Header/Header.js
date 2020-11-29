import React from "react";
import {Button, Image, List, Menu, Popup} from "semantic-ui-react";
import logoImg from "../../Images/Logo/cropped-gogopizza-logo.png"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import pizzaImg from "../../Images/Header/icons/1.png"
import setsImg from "../../Images/Header/icons/2.png"
import constructorImg from "../../Images/Header/icons/3.png"
import pancakesImg from "../../Images/Header/icons/4.png"
import snacksImg from "../../Images/Header/icons/5.png"
import dessertsImg from "../../Images/Header/icons/6.png"
import saucesImg from "../../Images/Header/icons/7.png"
import drinksImg from "../../Images/Header/icons/8.png"




const Basket = ({name, img, id, removeFromBasketAC}) =>{
    return(
        <List  selection divided verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Button onClick={removeFromBasketAC.bind(this, id)} color="red">Удалить</Button>
                </List.Content>
                <Image avatar src={img} />
                <List.Content>{name}</List.Content>

            </List.Item>
        </List>
    )
};


const Header = (props) => {
       const {totalPrice, count, items, removeFromBasketAC} = props
    return(

        <div className={s.header}>
                <Image src={logoImg} size='small'/>
                <Menu inverted>
                <Menu.Menu position="right">
                    <NavLink to='/main'><Menu.Item active='main'>Главная</Menu.Item></NavLink>
                    <NavLink to='/shares'><Menu.Item active='shares'>Акции</Menu.Item></NavLink>
                    <NavLink to='/contacts'><Menu.Item active='contacts'>Контакты</Menu.Item></NavLink>
                    <NavLink to='/vacancies'><Menu.Item active='vacancies'>Вакансии</Menu.Item></NavLink>
                    <Menu.Item > Итого : &nbsp; <b>{totalPrice}</b> &nbsp; руб.</Menu.Item>
                    <Popup trigger={
                        <Menu.Item active='basket'>
                            Корзина : <b>{count}</b>
                        </Menu.Item>
                    }
                           content={items.map(pizza=> <Basket {...props} {...pizza}/>)}
                           on="click"
                           hideOnScroll
                    />
                </Menu.Menu>
            </Menu>
            <div className={s.lowHeader}>
                <Menu inverted>
                    <NavLink to='pizzas'><Image src={pizzaImg}/><Menu.Item active='pizzas'>Пицца</Menu.Item></NavLink>
                    <NavLink to='sets'><Image src={setsImg}/><Menu.Item active='sets'>Сеты</Menu.Item></NavLink>
                    <NavLink to='constuctor'><Image src={constructorImg}/><Menu.Item
                        active='constuctor'>Конструктор</Menu.Item></NavLink>
                    <NavLink to='pancakes'><Image src={pancakesImg}/><Menu.Item
                        active='pancakes'>Блины</Menu.Item></NavLink>
                    <NavLink to='snacks'><Image src={snacksImg}/><Menu.Item
                        active='snacks'>Закуски</Menu.Item></NavLink>
                    <NavLink to='desserts'><Image src={dessertsImg}/><Menu.Item
                        active='desserts'>Десерты</Menu.Item></NavLink>
                    <NavLink to='sauces'><Image src={saucesImg}/><Menu.Item active='sauces'>Соусы</Menu.Item></NavLink>
                    <NavLink to='drinks'><Image src={drinksImg}/><Menu.Item
                        active='drinks'>Напитки</Menu.Item></NavLink>
                </Menu>
            </div>
        </div>
        )


};
export default Header
