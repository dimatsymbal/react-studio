import { Component } from 'react'
import Slider from 'react-slick'
import './SlickSlider.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            fade: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        AOS.init()
        return (
            <div className="sliderSlickBlock">
                <Slider {...settings} className="sliderSlick">
                    <div data-aos="fade-down" data-aos-duration="1000">
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
