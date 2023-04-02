import './Reservation.scss'
import CartList from './CartList/CartList'
import { useAppSelector } from 'redux/hooks'
import CartTotalPrice from 'components/CartTotalPrice/CartTotalPrice'
import PriceListInCart from './PriceListInCart/PriceListInCart'
type Props = {
    priceData: {
        totalPrice: number
    }

    checkToCart: (price: number) => void
    uncheckFromCart: (price: number) => void
}
const Reservation = ({ priceData, checkToCart, uncheckFromCart }: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
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
        </div>
    )
}
export default Reservation
