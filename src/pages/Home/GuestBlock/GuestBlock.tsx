import GuestBlockPhoto from 'components/GuestBlockPhoto/GuestBlockPhoto'
import WarningLogo from 'components/WarningLogo/WarningLogo'
import './GuestBlock.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'
//библиотекой react-responsive для определения
//текущего состояния медиа-запроса внутри вашего компонента React.

type Props = {}
const GuestBlock = (props: Props) => {
    // В этом примере мы используем хук useMediaQuery из библиотеки react-responsive
    // для определения состояния медиа-запроса maxWidth: 900. Значение isMobile будет true,
    // если ширина окна меньше 900 пикселей, и false в противном случае.
    const isMobile = useMediaQuery({ maxWidth: 900 })
    AOS.init()
    return (
        <div className="guest_block">
            <div className="container_guides_block">
                <div
                    className="left"
                    data-aos={isMobile ? '' : 'fade-right'}
                    data-aos-duration="1000"
                >
                    <WarningLogo />
                    <p className="aa111_456">Welcome to Beautyness!!!</p>
                    <h2 className="title_guest_block">
                        Bring The well being & beauty naturally!!!
                    </h2>
                    <p className="paragraph_guest_block">
                        Your body does a lot for you, and your caring therapist
                        can help you return the favor in a way that benefits
                        both your physical and mental wellness.
                    </p>

                    <Link to="/services">
                        <button className="reservation_btn_guest_block">
                            What we provide?
                        </button>
                    </Link>
                </div>

                <div
                    className="right"
                    data-aos={isMobile ? 'fade-down' : 'fade-left'}
                    data-aos-duration="1000"
                >
                    <GuestBlockPhoto />
                    <img
                        className="guestBlockBack"
                        src="/images/guestBlockBack.png"
                        alt="guestBlockBack"
                    />
                </div>
            </div>
        </div>
    )
}
export default GuestBlock
