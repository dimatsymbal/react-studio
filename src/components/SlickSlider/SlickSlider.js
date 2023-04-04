import { Component } from 'react'
import Slider from 'react-slick'
import './SlickSlider.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            fade: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div className="sliderSlickBlock">
                <Slider {...settings} className="sliderSlick">
                    <div>
                        <img
                            src="/images/slick_slide1.jpg"
                            alt="slick_slide1"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/slick_slide2.jpg"
                            alt="slick_slide1"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/slick_slide1.jpg"
                            alt="slick_slide1"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/slick_slide2.jpg"
                            alt="slick_slide1"
                        />
                    </div>
                </Slider>
            </div>
        )
    }
}
