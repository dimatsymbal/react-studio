import Guest_block_woman_logo from 'components/gb_photo/gb_photo'
import Warning_logo from 'components/Warning_logo/Warning_logo'
import './Guest_block.scss'
type Props = {}
const Guest_block = (props: Props) => {
    return (
        <div className="guest_block">
            <div className="container_guides_block">
                <div className="left">
                    <Warning_logo />
                    <p className="aa111_456">Welcome to Beautyness!!!</p>
                    <h2 className="title_guest_block">
                        Bring The well being & beauty naturally!!!
                    </h2>
                    <p className="paragraph_guest_block">
                        Your body does a lot for you, and your caring therapist
                        can help you return the favor in a way that benefits
                        both your physical and mental wellness.
                    </p>
                    <button className="reservation_btn_guest_block">
                        Make a Reservation
                    </button>
                </div>

                <div className="right">
                    <Guest_block_woman_logo />
                </div>
            </div>
        </div>
    )
}
export default Guest_block
