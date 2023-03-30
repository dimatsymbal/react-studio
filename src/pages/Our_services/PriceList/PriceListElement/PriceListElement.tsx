import './PriceListElement.scss'

type Props = {
    id: number
    title: string
    paragraph: string
    price: number
}

const PriceListElement = ({ id, title, paragraph, price }: Props) => {
    return (
        <>
            <div className="element_of_price_list">
                <h6 className="titleInElementPriceList">{title}</h6>
                <p>from ${price}.00</p>
            </div>
            <p>{paragraph}</p>
            <hr />
        </>
    )
}
export default PriceListElement
