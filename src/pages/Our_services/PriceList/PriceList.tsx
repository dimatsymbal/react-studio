import './PriceList.scss'

type Props = {}
const PriceList = (props: Props) => {
    return (
        <div className="Price_list">
            <h2 className="title_in_Price_list">Our services</h2>
            <div className="Price_list_content_block">
                <div className="row">
                    <div className="col">
                        <img
                            className="price_list_img"
                            src="/images/price_list_img1.jpg"
                            alt="price_list_img1"
                        />
                    </div>
                    <div className="col">
                        <ul className="spisok">
                            <li className="spisok_element">
                                <div className="element_of_price_list">
                                    <h6>Deep Tissue</h6>
                                    <p>from $48.00</p>
                                </div>
                                <p>
                                    A therapeutic massage that used for
                                    relieving muscles.
                                </p>
                                <hr />
                            </li>
                            <li className="spisok_element">
                                <div className="element_of_price_list">
                                    <h6>Body Scrub</h6>
                                    <p>from $18.00</p>
                                </div>
                                <p>
                                    Perfect way to relieve all that unwanted
                                    stress in body.
                                </p>
                                <hr />
                            </li>
                            <li className="spisok_element">
                                <div className="element_of_price_list">
                                    <h6>Foot Massage</h6>
                                    <p>from $25.00</p>
                                </div>
                                <p>
                                    Get a relaxing massage focused on your feet
                                    and lower legs.
                                </p>
                                <hr />
                            </li>
                            <li className="spisok_element">
                                <div className="element_of_price_list">
                                    <h6>Scalp Treatments</h6>
                                    <p>from $15.00</p>
                                </div>
                                <p>
                                    Superior gray creates a rich, natural look
                                    with less fading.
                                </p>
                                <hr />
                            </li>
                            <li className="spisok_element">
                                <div className="element_of_price_list">
                                    <h6>Full Massage</h6>
                                    <p>from $75.00</p>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <hr />
                            </li>
                        </ul>

                        <button className="btn_under_list_in_col">
                            GET AN APPOINTMENT
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="spisok">
                            <li className="spisok_element">
                                <div className="element_of_price_list">
                                    <h6>Fertility Massage</h6>
                                    <p>from $18.00</p>
                                </div>
                                <p>
                                    Help support reproductive health, the
                                    menstrual cycle.
                                </p>
                                <hr />
                            </li>
                            <li className="spisok_element">
                                <div className="element_of_price_list">
                                    <h6>Blemish Buster</h6>
                                    <p>from $40.00</p>
                                </div>
                                <p>
                                    Deep cleansing facial rebalances to promote
                                    healthy skin.
                                </p>
                                <hr />
                            </li>
                            <li className="spisok_element">
                                <div className="element_of_price_list">
                                    <h6>Oxygen Facial</h6>
                                    <p>from $32.00</p>
                                </div>
                                <p>
                                    Hydrates, tones, lifts, and adds radiance to
                                    the skin.
                                </p>
                                <hr />
                            </li>
                            <li className="spisok_element">
                                <div className="element_of_price_list">
                                    <h6>Lash Lift</h6>
                                    <p>from $25.00</p>
                                </div>
                                <p>
                                    Treatment for natural lashes that can add
                                    curl and definition.
                                </p>
                                <hr />
                            </li>
                            <li className="spisok_element">
                                <div className="element_of_price_list">
                                    <h6>Clear chakra</h6>
                                    <p>from $175.00</p>
                                </div>
                                <p>
                                    Cupiditate aspernatur deserunt recusandae et
                                    nulla eum minus odio ratione porro eveniet!
                                    Nemo incidunt dolores magni itaque!
                                </p>
                                <hr />
                            </li>
                        </ul>

                        <button className="btn_under_list_in_col2">
                            GET AN APPOINTMENT
                        </button>
                    </div>
                    <div className="col">
                        <img
                            className="price_list_img"
                            src="/images/price_list_img2.jpg"
                            alt="price_list_img2"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PriceList
