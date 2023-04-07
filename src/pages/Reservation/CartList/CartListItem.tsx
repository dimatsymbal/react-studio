import { Card, Button } from '@mui/material'
import { Items } from 'Utils/itemsArrey'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { deleteProductToCart } from 'redux/CardListRedux/CartReducer'
import './CartListItem.scss'
import { useState } from 'react'
import { addLike, removeLike } from 'redux/LikesOnCards/likeDetector'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'

type Props = {
    item: Items
}
const CartListItem = ({ item }: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[item.id])
    const dispatch = useAppDispatch()

    const [likeCounter, setLikeCountr] = useState<number>(0)

    const addLikeCounter = () => {
        setLikeCountr(0)
    }

    const removeLikeCounter = () => {
        setLikeCountr(1)
    }

    const finalLikeCount = item.likes + likeCounter

    return (
        <Card className="cardInCart">
            <h2 className="titleInCard">{item.title}</h2>
            <p className="paragraphInCard">{item.paragraph}</p>
            <h4 className="priceInCard">Price: {item.price}$</h4>

            <Button
                className="likesBtnInCard"
                variant="outlined"
                onClick={() => {
                    isLiked
                        ? dispatch(removeLike(item.id))
                        : dispatch(addLike(item.id))

                    isLiked ? addLikeCounter() : removeLikeCounter()
                }}
            >
                {' '}
                {isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                {finalLikeCount}
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
