import { Card, Button } from '@mui/material'
import { Items } from 'Utils/itemsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch } from 'redux/hooks'
import { deleteProductToCart } from 'redux/CartReducer'
import './CartListItem.scss'
type Props = {
    item: Items
}
const CartListItem = ({ item }: Props) => {
    const dispatch = useAppDispatch()
    return (
        <Card className="cardInCart">
            <h2 className="titleInCard">{item.title}</h2>
            <p className="paragraphInCard">{item.paragraph}</p>
            <h4 className="priceInCard">Price: {item.price}$</h4>

            <Button variant="outlined" className="likesBtnInCard">
                {item.likes}
            </Button>
            <img className="imgInCard" src={item.image} alt="card_image" />

            <Button
                variant="outlined"
                className="deleteBtn"
                onClick={() => dispatch(deleteProductToCart(item.id))}
            >
                <DeleteIcon />
            </Button>
        </Card>
    )
}
export default CartListItem
