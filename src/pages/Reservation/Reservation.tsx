import './Reservation.scss'
import CartList from './CartList/CartList'
import { useAppSelector } from 'redux/hooks'
type Props = {}
const Reservation = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div className="Reservation">
            <CartList productsInCart={productsInCart} />
        </div>
    )
}
export default Reservation
