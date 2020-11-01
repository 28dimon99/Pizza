import React, {Component} from "react";
import img1 from "../../Images/Carusel/1.png"
import img2 from "../../Images/Carusel/2.png"
import img3 from "../../Images/Carusel/3.png"
import img4 from "../../Images/Carusel/4.png"
import next from "../../Images/Carusel/next.png"
import prev from "../../Images/Carusel/prev.png"
import s from "./Carusel.module.css"
import {Menu} from "semantic-ui-react";


class Carusel extends Component {
    constructor() {
        super();
        this.state = {
            images: [
                img1, img2, img3, img4
            ],
            currentImageIndex: 0,
            isCycleMode: false,
            canGoPrev: false,
            canGoNext: true

        }
        this.nextSlideHandler = this.nextSlideHandler.bind(this)
    }

    _makeNextStep(currentIndex) {
        let newIndex = currentIndex
        if (currentIndex < this.state.images.length - 1) {
            newIndex = this.state.currentImageIndex + 1;
            this.setState({canGoPrev: true});
        }
        if (newIndex === this.state.images.length - 1) {
            this.setState({canGoNext: false});
        }
        return newIndex
    }

    _makePrevStep(currentIndex) {
        let newIndex = currentIndex
        if (currentIndex > 0) {
            newIndex = this.state.currentImageIndex - 1;
            this.setState({canGoNext: true})
        }
        if (newIndex === 0) {
            this.setState({canGoPrev: false});
        }
        return newIndex
    }

    nextSlideHandler(e) {
        let currentIndex = this.state.currentImageIndex
        let newIndex = this.state.currentIndex
        if (e.currentTarget.dataset.direction === 'next') {
            newIndex = this._makeNextStep(currentIndex);
        } else {
            newIndex = this._makePrevStep(currentIndex);
        }
        this.setState({currentImageIndex: newIndex});

    }

    render() {

        return (
            <Menu className={s.carusel}>
                <div className={s.mainImg}>
                    <img src={this.state.images[this.state.currentImageIndex]} alt=""/>
                </div>
                    <div className={s.prev}>
                        <button disabled={!this.state.canGoPrev} data-direction="prev"
                                onClick={this.nextSlideHandler.bind(this)}>
                            <img src={prev} alt=""/>
                        </button>
                    </div>
                    <div className={s.next}>
                        <button disabled={!this.state.canGoNext} data-direction="next"
                                onClick={this.nextSlideHandler.bind(this)}>
                            <img src={next} alt=""/>
                        </button>
                    </div>
         </Menu>
        )
    }
}

export default Carusel