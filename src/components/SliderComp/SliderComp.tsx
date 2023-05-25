import Carousel from 'react-bootstrap/Carousel'
import './SliderComp.scss'
import './slider-hover.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

type Props = {}
const SliderComp = (props: Props) => {
    AOS.init()
    return (
        <Carousel
            className="carousel"
            data-aos="fade-down"
            data-aos-duration="1000"
        >
            <Carousel.Item className="slider_item">
                <img
                    className="slider_img"
                    src="/images/about_slide1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider_item">
                <img
                    className="slider_img"
                    src="/images/about_slide2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider_item">
                <img
                    className="slider_img"
                    src="/images/about_slide3.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default SliderComp
