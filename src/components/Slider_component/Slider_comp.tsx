import Carousel from 'react-bootstrap/Carousel'
import './Slider_comp.scss'
import './slider-hover.css'
type Props = {}
const Slider_comp = (props: Props) => {
    return (
        <Carousel className="carousel">
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
export default Slider_comp
