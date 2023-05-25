import './CheckboxBlock.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'

type Props = {}
const CheckboxBlock = (props: Props) => {
    AOS.init()
    const isMobile = useMediaQuery({ maxWidth: 900 })

    return (
        <div className="Checkbox_block">
            <p className="subtitle_Checkbox_block">Our Awesome Benefits</p>
            <h2 className="title_Checkbox_block">What you’ll get from Us</h2>

            <div className="checkboxes_in_block">
                <div
                    className="row align-items-center"
                    data-aos={isMobile ? 'fade-up' : 'fade-right'}
                    data-aos-duration="1000"
                >
                    <div className="col">
                        <img
                            className="img_in_col_in_checkboxBlock"
                            src="/images/checkbox.jpg"
                            alt="checkbox"
                        />

                        <h3>Built with you in mind</h3>
                        <p>
                            Talented, educated, and fashion-forward artists meet
                            the unique needs of client.
                        </p>
                    </div>
                    <div className="col">
                        <img
                            className="img_in_col_in_checkboxBlock"
                            src="/images/checkbox.jpg"
                            alt="checkbox"
                        />

                        <h3>The Perfect Salon Services</h3>
                        <p>
                            We know how important it is to maintain strong
                            relationships with clients.
                        </p>
                    </div>
                    <div className="col">
                        <img
                            className="img_in_col_in_checkboxBlock"
                            src="/images/checkbox.jpg"
                            alt="checkbox"
                        />
                        <h3>Skin Deep Experiences</h3>
                        <p>
                            Appropriate for all skin types, sun damage, fine
                            lines and wrinkles, acne, and oily.
                        </p>
                    </div>
                </div>
                <div
                    className="row align-items-center"
                    id="row2"
                    data-aos={isMobile ? 'fade-up' : 'fade-left'}
                    data-aos-duration="1000"
                >
                    <div className="col">
                        <img
                            className="img_in_col_in_checkboxBlock"
                            src="/images/checkbox.jpg"
                            alt="checkbox"
                        />

                        <h3>Built with you in mind</h3>
                        <p>
                            Talented, educated, and fashion-forward artists meet
                            the unique needs of client.
                        </p>
                    </div>
                    <div className="col">
                        <img
                            className="img_in_col_in_checkboxBlock"
                            src="/images/checkbox.jpg"
                            alt="checkbox"
                        />

                        <h3>Built with you in mind</h3>
                        <p>
                            Talented, educated, and fashion-forward artists meet
                            the unique needs of client.
                        </p>
                    </div>
                    <div className="col">
                        <img
                            className="img_in_col_in_checkboxBlock"
                            src="/images/checkbox.jpg"
                            alt="checkbox"
                        />

                        <h3>Built with you in mind</h3>
                        <p>
                            Talented, educated, and fashion-forward artists meet
                            the unique needs of client.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckboxBlock
