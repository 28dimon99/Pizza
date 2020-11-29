import React from "react";
import {Button, Card, Icon, Image} from "semantic-ui-react";
import s from "../lowHeaderCard.module.css"

const PizzaCard = (props) =>{
    const {img, name, price, description, addToBasketAC, addedCount} = props.pizzas;
    return(

            <Card className={s.card}>
                <Image src={img} />
                <Card.Content>
                    <Card.Meta>
                        <span className='date'>{name}</span>
                    </Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='rub' />
                        {price}
                    </a>
                </Card.Content>
                <Button onClick={props.addToBasketAC.bind(this, props.pizzas)}>Добавить в корзину{addedCount > 0 && `(${addedCount})`}</Button>
            </Card>
    )
};
export default PizzaCard