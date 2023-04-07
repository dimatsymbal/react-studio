import GuestBlockPhoto from 'components/GuestBlockPhoto/GuestBlockPhoto'
import WarningLogo from 'components/WarningLogo/WarningLogo'
import './GuestBlock.scss'
import { Link } from 'react-router-dom'
type Props = {}
const GuestBlock = (props: Props) => {
    return (
        <div className="guest_block">
            <div className="container_guides_block">
                <div className="left">
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

                <div className="right">
                    <GuestBlockPhoto />
                </div>
            </div>
        </div>
    )
}
export default GuestBlock
