import { Card, Button } from '@mui/material'
import { Items } from 'Utils/itemsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch } from 'redux/hooks'
import { deleteProductToCart } from 'redux/CartReducer'

type Props = {
    item: Items
}
const CartListItem = ({ item }: Props) => {
    const dispatch = useAppDispatch()
    return (
        <Card>
            {item.id}

            <Button onClick={() => dispatch(deleteProductToCart(item.id))}>
                <DeleteIcon />
            </Button>
        </Card>
    )
}
export default CartListItem
