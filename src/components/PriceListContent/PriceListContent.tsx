import priceListItemsArrey from 'Utils/priceListItems'
import PriceListElement from 'pages/Our_services/PriceList/PriceListElement/PriceListElement'

type priceListItems = {
    id: number
    title: string
    paragraph: string
    price: number
}

type Props = {
    checkToCart: (price: number) => void
    uncheckFromCart: (price: number) => void
}
const PriceListContent = ({ checkToCart, uncheckFromCart }: Props) => {
    return (
        <>
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
                                                checkToCart={checkToCart}
                                                uncheckFromCart={
                                                    uncheckFromCart
                                                }
                                            />
                                        </li>
                                    )
                                )}
                        </ul>

                        <button className="btn_under_list_in_col">
                            GET AN APPOINTMENT
                        </button>
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
                                                checkToCart={checkToCart}
                                                uncheckFromCart={
                                                    uncheckFromCart
                                                }
                                            />
                                        </li>
                                    )
                                )}
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
                <div className="row">
                    <div className="col">
                        <img
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
                                                checkToCart={checkToCart}
                                                uncheckFromCart={
                                                    uncheckFromCart
                                                }
                                            />
                                        </li>
                                    )
                                )}
                        </ul>

                        <button className="btn_under_list_in_col">
                            GET AN APPOINTMENT
                        </button>
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
                                                checkToCart={checkToCart}
                                                uncheckFromCart={
                                                    uncheckFromCart
                                                }
                                            />
                                        </li>
                                    )
                                )}
                        </ul>

                        <button className="btn_under_list_in_col2">
                            GET AN APPOINTMENT
                        </button>
                    </div>
                    <div className="col">
                        <img
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
