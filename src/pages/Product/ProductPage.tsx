import priceListItemsArrey, {
    getListObject,
    priceListItems,
} from 'Utils/priceListItems'
import './ProductPage.scss'
import { useParams } from 'react-router-dom'

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addCheck, removeCheck } from 'redux/PriceListRedux/checkboxDetector'

type Props = {
    productsObject?: {
        [id: number]: priceListItems
    }

    checkToCart: (price: number) => void
    uncheckFromCart: (price: number) => void
}
const ProductPage = ({
    productsObject = getListObject(priceListItemsArrey),
    checkToCart,
    uncheckFromCart,
}: Props) => {
    const { id } = useParams()

    const isChecked = useAppSelector(
        (state) => state.checkBoxState[productsObject[parseInt(id!)].id]
    )
    const dispatch = useAppDispatch()

    return (
        <div className="ProductPage">
            <div className="productPageContainer">
                <img
                    src={productsObject[parseInt(id!)].uniquePhoto}
                    alt="uniquePhoto"
                />
                <h4>{productsObject[parseInt(id!)].title}</h4>
                <p className="basicParagraph">
                    {productsObject[parseInt(id!)].paragraph}
                </p>

                <p className="uniqueParagraph1">
                    {productsObject[parseInt(id!)].uniqueParagraph1}
                </p>

                <h6>Discription</h6>

                <p className="uniqueParagraph2">
                    {productsObject[parseInt(id!)].uniqueParagraph2}
                </p>

                <h6>Advantages</h6>

                <div className="row">
                    <div className="col">
                        {' '}
                        <p className="uniqueParagraph3">
                            {productsObject[parseInt(id!)].uniqueParagraph3}
                        </p>
                    </div>

                    <div className="col">
                        <img
                            src={productsObject[parseInt(id!)].photoInCol}
                            alt="photoInCol"
                        />
                        <p className="uniqueParagraph4">
                            {productsObject[parseInt(id!)].uniqueParagraph4}
                        </p>
                    </div>
                </div>

                <div className="finalPart">
                    <h6>Price: {productsObject[parseInt(id!)].price} $</h6>
                    <p>Add to cart</p>
                    <button
                        className="checkboxToCart"
                        onClick={() => {
                            isChecked
                                ? dispatch(
                                      removeCheck(
                                          productsObject[parseInt(id!)].id
                                      )
                                  )
                                : dispatch(
                                      addCheck(productsObject[parseInt(id!)].id)
                                  )

                            isChecked
                                ? uncheckFromCart(
                                      productsObject[parseInt(id!)].price
                                  )
                                : checkToCart(
                                      productsObject[parseInt(id!)].price
                                  )
                        }}
                    >
                        {isChecked ? (
                            <CheckBoxIcon />
                        ) : (
                            <CheckBoxOutlineBlankIcon />
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductPage
