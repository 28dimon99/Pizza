import React from "react"
import {Button, Image, List} from "semantic-ui-react";





const Basket = ({name, img, id, removeFromBasket}) =>{
    return(
        <List  selection divided verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Button onClick={removeFromBasket.bind(this, id)} color="red">Удалить</Button>
                </List.Content>
                <Image avatar src={img} />
                <List.Content>{name}</List.Content>
            </List.Item>
        </List>
    )
};

export default Basket

