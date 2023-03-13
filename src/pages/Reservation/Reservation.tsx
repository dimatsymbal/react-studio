import './Reservation.scss'
import Check_in_block from './Check_in_block/Check_in_block'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const Reservation = ({ productsInCart }: Props) => {
    return (
        <div className="Reservation">
            <Check_in_block productsInCart={productsInCart} />
        </div>
    )
}
export default Reservation
