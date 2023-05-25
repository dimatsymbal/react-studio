import './Map.scss'
import './Map-hover.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

type Props = {}
const Map = (props: Props) => {
    AOS.init()

    return (
        <div className="Map">
            <div className="container">
                <h2 className="title_Map_block">Our location</h2>

                <a href="https://www.google.com.ua/maps/place/Fly+Albuquerque/@35.0761545,-106.6248984,13.7z/data=!4m6!3m5!1s0x872203df13fb7171:0xe05137916b30487d!8m2!3d35.074222!4d-106.6112044!16s%2Fg%2F11qp1bqcdf?hl=ru">
                    <div
                        className="img_block"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    >
                        <img
                            className="img_map"
                            src="/images/map.jpg"
                            alt="map"
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
export default Map
