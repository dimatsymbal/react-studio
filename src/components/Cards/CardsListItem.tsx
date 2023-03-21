import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import './CardListItem.scss'
import { Button } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeCounter'
import { addProductToCart } from 'redux/CartReducer'
import { useState } from 'react'

type Props = {
    id: number
    img: string
    title: string
    paragraph: string
    price: number
    likeCount: number
    addProductToCart?: (id: number) => void
}

const CardsListItem = ({
    id,
    img,
    title,
    paragraph,
    price,
    likeCount,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    const [likeCounter, setLikeCountr] = useState<number>(0)

    const addLikeCounter = () => {
        setLikeCountr(0)
    }

    const removeLikeCounter = () => {
        setLikeCountr(1)
    }

    const finalLikeCount = likeCount + likeCounter

    return (
        <Card className="Card">
            <img className="Card-img" src={img} alt="lost img" />
            <CardContent>
                <h2 className="card-title">{title}</h2>
                <p className="card-paragraph">{paragraph}</p>
                <h5>{price}$</h5>
            </CardContent>
            <CardActions className="card_actions_div" disableSpacing>
                <Button
                    className="addToCartBtn"
                    variant="outlined"
                    onClick={() => dispatch(addProductToCart({ id }))}
                >
                    add to cart
                </Button>

                <Button
                    className="likeBtn"
                    variant="outlined"
                    onClick={() => {
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))

                        isLiked ? addLikeCounter() : removeLikeCounter()
                    }}
                >
                    {' '}
                    {isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                    {finalLikeCount}
                </Button>
            </CardActions>
        </Card>
    )
}
export default CardsListItem
