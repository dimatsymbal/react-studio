import './Reservation.scss'
import CartList from './CartList/CartList'
import { useAppSelector } from 'redux/hooks'
import CartTotalPrice from 'components/CartTotalPrice/CartTotalPrice'
import PriceListInCart from './PriceListInCart/PriceListInCart'
import { Link } from 'react-router-dom'
import { getProductsObject, Items } from 'Utils/itemsArrey'
import { Button } from 'react-bootstrap'

type ProductsObject = {
    [id: number]: Items
}

type Props = {}
const Reservation = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    const priceData = useAppSelector((state) => state.priceData)

    const itemsArrey = useAppSelector((state) => state.items)

    const productsObject: ProductsObject = getProductsObject(itemsArrey)

    const superFinalSum: number =
        priceData.totalPrice +
        Object.keys(productsInCart).reduce(
            (total, articleId) =>
                total + productsObject[parseInt(articleId)].price,
            0
        )

    return (
        <div className="Reservation">
            <PriceListInCart productsInCart={productsInCart} />
            <CartList productsInCart={productsInCart} />
            <CartTotalPrice
                productsInCart={productsInCart}
                priceData={priceData}
            />

            <div className="checkoutLinkBlock">
                <Button disabled={superFinalSum < 1}>
                    <Link className="checkoutLink" to="/checkout">
                        Proceed to checkout
                    </Link>
                </Button>

                <p hidden={superFinalSum > 1}>You haven`t booked anything</p>
            </div>
        </div>
    )
}
export default Reservation
