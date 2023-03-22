import './CartList.scss'
import CartListItem from './CartListItem'
import itemsArrey, { getProductsObject, Items } from 'Utils/itemsArrey'
import { useAppSelector } from 'redux/hooks'

type ProductsObject = {
    [id: number]: Items
}

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartList = ({ productsInCart }: Props) => {
    const itemsArrey = useAppSelector((state) => state.items)
    const productsObject: ProductsObject = getProductsObject(itemsArrey)
    return (
        <div className="Check_in_block">
            <div className="container_check_in_block">
                <div>
                    {Object.keys(productsInCart).map((articleId) => (
                        <CartListItem
                            key={articleId}
                            item={productsObject[parseInt(articleId)]}
                        />
                    ))}
                </div>
                {/* <div>
                    Total:
                    {Object.keys(productsInCart).reduce(
                        (total, articleId) =>
                            total +
                            productsObject[parseInt(articleId)].price *
                                productsInCart[parseInt(articleId)]
                    )}
                </div> */}

                {/* <div className="row">
                    <div className="col">
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Label"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Label"
                            />
                        </FormGroup>
                    </div>
                    <div className="col">Column</div>
                </div> */}
            </div>
        </div>
    )
}
export default CartList
