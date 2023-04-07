import './PriceListElement.scss'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addCheck, removeCheck } from 'redux/PriceListRedux/checkboxDetector'
import { Link } from 'react-router-dom'
import {
    checkToCart,
    uncheckFromCart,
} from 'redux/PriceListRedux/priceListReducer'

type Props = {
    id: number
    title: string
    paragraph: string
    price: number
}

const PriceListElement = ({ id, title, paragraph, price }: Props) => {
    const isChecked = useAppSelector((state) => state.checkBoxState[id])
    const dispatch = useAppDispatch()
    return (
        <>
            <button
                className="checkboxToCart"
                onClick={() => {
                    isChecked
                        ? dispatch(removeCheck(id))
                        : dispatch(addCheck(id))

                    isChecked
                        ? dispatch(uncheckFromCart(price))
                        : dispatch(checkToCart(price))
                }}
            >
                {isChecked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </button>
            <div className="element_of_price_list">
                {' '}
                <Link className="uniqeProductLink" to={`/products/${id}`}>
                    {' '}
                    <h6 className="titleInElementPriceList"> {title} </h6>
                </Link>
                <p className="priceInElementPriceList">from ${price}.00</p>
            </div>
            <p className="paragraphInElementPriceList">{paragraph}</p>
            <hr />
        </>
    )
}
export default PriceListElement
