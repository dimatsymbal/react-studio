import priceListItemsArrey from 'Utils/priceListItems'
import PriceListElement from 'pages/Our_services/PriceList/PriceListElement/PriceListElement'
import './PriceListInCart.scss'

type priceListItems = {
    id: number
    title: string
    paragraph: string
    price: number
}

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const PriceListInCart = (props: Props) => {
    return (
        <div className="PriceListInCart">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="spisok" id="spisok1">
                            {priceListItemsArrey
                                .filter(
                                    (product) =>
                                        product.part === 'first' ||
                                        product.part === 'third'
                                )
                                .map(
                                    ({
                                        id,
                                        title,
                                        paragraph,
                                        price,
                                    }: priceListItems) => (
                                        <div
                                            className="spisok_element"
                                            key={id}
                                        >
                                            <button className="checkboxToCart"></button>
                                            <PriceListElement
                                                id={id}
                                                title={title}
                                                paragraph={paragraph}
                                                price={price}
                                            />
                                        </div>
                                    )
                                )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="spisok" id="spisok2">
                            {priceListItemsArrey
                                .filter(
                                    (product) =>
                                        product.part === 'second' ||
                                        product.part === 'fourth'
                                )
                                .map(
                                    ({
                                        id,
                                        title,
                                        paragraph,
                                        price,
                                    }: priceListItems) => (
                                        <div
                                            className="spisok_element"
                                            key={id}
                                        >
                                            <PriceListElement
                                                id={id}
                                                title={title}
                                                paragraph={paragraph}
                                                price={price}
                                            />
                                        </div>
                                    )
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PriceListInCart
