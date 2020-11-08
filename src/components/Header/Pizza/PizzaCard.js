import React from "react";
import {Button, Card, Icon, Image} from "semantic-ui-react";

const PizzaCard = (props) =>{
    const {img, name, price, description} = props.pizzas;
    return(
        <Card>
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
          <Button>
              Добавить в корзину
          </Button>
      </Card>

     /*   <div>
            <img src={props.pizzas.img}/>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <p>{props.description}</p>
        </div>*/
    )
};
export default PizzaCard