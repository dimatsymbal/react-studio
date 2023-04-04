import './CartList.scss'
import CartListItem from './CartListItem'
import { getProductsObject, Items } from 'Utils/itemsArrey'
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
        <div className="CartList">
            <div className="CartListContainer">
                <div className="row">
                    {Object.keys(productsInCart).map((articleId) => (
                        <div className="col-6">
                            <CartListItem
                                key={articleId}
                                item={productsObject[parseInt(articleId)]}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default CartList
