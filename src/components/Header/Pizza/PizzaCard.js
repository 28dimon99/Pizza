import React from "react";
import {Button, Card, Icon, Image} from "semantic-ui-react";

const PizzaCard = (pizza) =>{
    const {img, name, price, description} = pizza;
    return(
        <Card>
            {/*<Image src={img} />*/}
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
            <Button>
                Добавить в корзину
            </Button>
        </Card>
    )
};
export default PizzaCard