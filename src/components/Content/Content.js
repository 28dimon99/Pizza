import React from "react";
import s from "./Content.module.css"
import collectImg from "../../Images/Content/collectImg.png"
import pizzaImg from "../../Images/Content/pizzaImg.png"
import priceImg from "../../Images/Content/priceImg.png"
import setImg from "../../Images/Content/setImg.png"
import Carusel from "../Carusel/Carusel";
import {Menu, Image, Card} from "semantic-ui-react";
import bannerPizza from "../../Images/Content/bannerPizza.jpg"
import bannerPizza2 from "../../Images/Content/bannerPizza2.jpg"
import iconMin30 from "../../Images/Content/icons/1.svg"
import iconBonus from "../../Images/Content/icons/2.svg"
import iconPrice from "../../Images/Content/icons/3.svg"
import iconMin60 from "../../Images/Content/icons/4.svg"
import iconQuality from "../../Images/Content/icons/5.svg"
import iconCheese from "../../Images/Content/icons/6.svg"

const Content = () => {
    return (

        <div className={s.content}>
            <Carusel/>
            <div className={s.blockImg}>
                <Image src={setImg} className={s.one}/>
                <Image src={collectImg} className={s.two}/>
                <Image src={priceImg} className={s.three}/>
                <Image src={pizzaImg} className={s.four}/>
            </div>

            <Menu secondary>
                <Menu.Item active='pizzas' name='pizzas'>Пиццы</Menu.Item>
                <Menu.Item active='popular' name='popular'>Популярное</Menu.Item>
                <Menu.Item active='snacks' name='snacks'>Закуски</Menu.Item>
                <Menu.Item active='new' name='new'>Новинки</Menu.Item>
            </Menu>


            <div className={s.allButton}>
                <a href="#">
                    <button>Все пиццы</button>
                </a>
            </div>
            <div>
                <Image src={bannerPizza} alt=""/>
            </div>
            <h2>Отлично подходит к пицце</h2>
            <div className={s.card}>
                <Card>
                    <Image src="https://gogopizza.by/wp-content/uploads/2019/04/unnamed.jpg"/>
                    <Card.Content>
                        <Card.Header>Фанта 0,5 л</Card.Header>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src="https://gogopizza.by/wp-content/uploads/2019/04/bonaqua.jpg"/>
                    <Card.Content>
                        <Card.Header>Бонаква 0,5 л</Card.Header>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src="https://gogopizza.by/wp-content/uploads/2019/04/sprite.jpg"/>
                    <Card.Content>
                        <Card.Header>Спрайт 0,5 л</Card.Header>
                    </Card.Content>
                </Card>
            </div>

            <div>
                <Image src={bannerPizza2} alt=""/>
            </div>
            <div className={s.icons}>
                <Card>
                    <Image src={iconMin30}/>
                    <Card.Content>
                        <Card.Header>30 минут</Card.Header>
                        <Card.Description>Доставка пиццы в получасовой зоне или пицца бесплатно.</Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={iconBonus}/>
                    <Card.Content>
                        <Card.Header>Бонусы</Card.Header>
                        <Card.Description>Заказывай доставку, получай баллы и обменивай их на
                            еду.</Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={iconPrice}/>
                    <Card.Content>
                        <Card.Header>112.90 рублей</Card.Header>
                        <Card.Description>Минимальная сумма заказа для бесплатной доставки.</Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={iconMin60}/>
                    <Card.Content>
                        <Card.Header>60 минут</Card.Header>
                        <Card.Description>Доставка пиццы в часовой зоне или пицца бесплатно</Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={iconQuality}/>
                    <Card.Content>
                        <Card.Header>Качество</Card.Header>
                        <Card.Description>Гарантированно наивысшее качество начинки и теста.</Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={iconCheese}/>
                    <Card.Content>
                        <Card.Header>Сырный борт</Card.Header>
                        <Card.Description>Можно заказать к любой пицце среднего и большого
                            размера.</Card.Description>
                    </Card.Content>
                </Card>
            </div>
        </div>


    )

};

export default Content