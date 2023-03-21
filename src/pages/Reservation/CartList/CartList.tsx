import './CartList.scss'
// import Card from 'react-bootstrap/Card'
// import FormGroup from '@mui/material/FormGroup'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import Checkbox from '@mui/material/Checkbox'
import CartListItem from './CartListItem'

import itemsArrey, { getProductsObject, Items } from 'Utils/itemsArrey'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Items
    }
}
const CartList = ({
    productsInCart,
    productsObject = getProductsObject(itemsArrey),
}: Props) => {
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
