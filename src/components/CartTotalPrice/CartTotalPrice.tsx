import { getProductsObject, Items } from 'Utils/itemsArrey'
import { useAppSelector } from 'redux/hooks'
import './CartTotalPrice.scss'
type ProductsObject = {
    [id: number]: Items
}

type Props = {
    productsInCart: {
        [id: number]: number
    }

    priceData: {
        totalPrice: number
    }
}

const CartTotalPrice = ({ productsInCart, priceData }: Props) => {
    const itemsArrey = useAppSelector((state) => state.items)

    const productsObject: ProductsObject = getProductsObject(itemsArrey)
    const superFinalSum =
        priceData.totalPrice +
        Object.keys(productsInCart).reduce(
            (total, articleId) =>
                total + productsObject[parseInt(articleId)].price,
            0
        )
    return (
        <div className="totalPrice">
            <h3>Total: {superFinalSum}$</h3>
        </div>
    )
}
export default CartTotalPrice
