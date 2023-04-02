import './PriceListElement.scss'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addCheck, removeCheck } from 'redux/PriceListRedux/checkboxDetector'

type Props = {
    id: number
    title: string
    paragraph: string
    price: number
    checkToCart: (price: number) => void
    uncheckFromCart: (price: number) => void
}

const PriceListElement = ({
    id,
    title,
    paragraph,
    price,
    checkToCart,
    uncheckFromCart,
}: Props) => {
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

                    isChecked ? uncheckFromCart(price) : checkToCart(price)
                }}
            >
                {isChecked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </button>
            <div className="element_of_price_list">
                <h6 className="titleInElementPriceList">{title}</h6>
                <p className="priceInElementPriceList">from ${price}.00</p>
            </div>
            <p className="paragraphInElementPriceList">{paragraph}</p>
            <hr />
        </>
    )
}
export default PriceListElement
