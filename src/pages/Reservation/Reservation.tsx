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

type Props = {
    priceData: {
        totalPrice: number
    }

    productsInCart: {
        [id: number]: number
    }

    checkToCart: (price: number) => void
    uncheckFromCart: (price: number) => void
}
const Reservation = ({
    productsInCart,
    priceData,
    checkToCart,
    uncheckFromCart,
}: Props) => {
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
            <PriceListInCart
                productsInCart={productsInCart}
                checkToCart={checkToCart}
                uncheckFromCart={uncheckFromCart}
            />
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
