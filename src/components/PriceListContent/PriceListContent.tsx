import priceListItemsArrey from 'Utils/priceListItems'
import PriceListElement from 'pages/Our_services/PriceList/PriceListElement/PriceListElement'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'

type priceListItems = {
    id: number
    title: string
    paragraph: string
    price: number
}

type Props = {}
const PriceListContent = (props: Props) => {
    AOS.init()
    const isMobile = useMediaQuery({ maxWidth: 900 })
    return (
        <>
            <div className="Price_list_content_block">
                <div className="row">
                    <div className="col">
                        <img
                            data-aos={isMobile ? 'fade-down' : 'fade-right'}
                            data-aos-duration="1000"
                            className="price_list_img"
                            src="/images/price_list_img1.jpg"
                            alt="price_list_img1"
                        />
                    </div>
                    <div className="col">
                        <ul className="spisok">
                            {priceListItemsArrey
                                .filter((product) => product.part === 'first')
                                .map(
                                    ({
                                        id,
                                        title,
                                        paragraph,
                                        price,
                                    }: priceListItems) => (
                                        <li className="spisok_element" key={id}>
                                            <PriceListElement
                                                id={id}
                                                title={title}
                                                paragraph={paragraph}
                                                price={price}
                                            />
                                        </li>
                                    )
                                )}
                        </ul>

                        <Link className="reservationLink" to="/reservation">
                            <button className="btn_under_list_in_col">
                                GET AN APPOINTMENT
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="spisok">
                            {priceListItemsArrey
                                .filter((product) => product.part === 'second')
                                .map(
                                    ({
                                        id,
                                        title,
                                        paragraph,
                                        price,
                                    }: priceListItems) => (
                                        <li className="spisok_element" key={id}>
                                            <PriceListElement
                                                id={id}
                                                title={title}
                                                paragraph={paragraph}
                                                price={price}
                                            />
                                        </li>
                                    )
                                )}
                        </ul>

                        <Link className="reservationLink" to="/reservation">
                            <button className="btn_under_list_in_col2">
                                GET AN APPOINTMENT
                            </button>
                        </Link>
                    </div>
                    <div className="col">
                        <img
                            data-aos={isMobile ? 'fade-down' : 'fade-left'}
                            data-aos-duration="1000"
                            className="price_list_img"
                            src="/images/price_list_img2.jpg"
                            alt="price_list_img2"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img
                            data-aos={isMobile ? 'fade-down' : 'fade-right'}
                            data-aos-duration="1000"
                            className="price_list_img"
                            src="/images/price_list_img3.jpg"
                            alt="price_list_img3"
                        />
                    </div>
                    <div className="col">
                        <ul className="spisok">
                            {priceListItemsArrey
                                .filter((product) => product.part === 'third')
                                .map(
                                    ({
                                        id,
                                        title,
                                        paragraph,
                                        price,
                                    }: priceListItems) => (
                                        <li className="spisok_element" key={id}>
                                            <PriceListElement
                                                id={id}
                                                title={title}
                                                paragraph={paragraph}
                                                price={price}
                                            />
                                        </li>
                                    )
                                )}
                        </ul>

                        <Link className="reservationLink" to="/reservation">
                            <button className="btn_under_list_in_col">
                                GET AN APPOINTMENT
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="spisok">
                            {priceListItemsArrey
                                .filter((product) => product.part === 'fourth')
                                .map(
                                    ({
                                        id,
                                        title,
                                        paragraph,
                                        price,
                                    }: priceListItems) => (
                                        <li className="spisok_element" key={id}>
                                            <PriceListElement
                                                id={id}
                                                title={title}
                                                paragraph={paragraph}
                                                price={price}
                                            />
                                        </li>
                                    )
                                )}
                        </ul>

                        <Link className="reservationLink" to="/reservation">
                            <button className="btn_under_list_in_col2">
                                GET AN APPOINTMENT
                            </button>
                        </Link>
                    </div>
                    <div className="col">
                        <img
                            data-aos={isMobile ? 'fade-down' : 'fade-left'}
                            data-aos-duration="1000"
                            className="price_list_img4"
                            src="/images/price_list_img4.jpg"
                            alt="price_list_img4"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default PriceListContent
