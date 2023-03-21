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

type Props = {
    id: number
    img: string
    title: string
    paragraph: string
    hide_paragraph: string
    addProductToCart?: (id: number) => void
}

const CardsListItem = ({ id, img, title, paragraph }: Props) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <Card className="Card">
            <img className="Card-img" src={img} alt="lost img" />
            <CardContent>
                <h2 className="card-title">{title}</h2>
                <p className="card-paragraph">{paragraph}</p>
            </CardContent>
            <CardActions disableSpacing>
                <Button onClick={() => dispatch(addProductToCart({ id }))}>
                    add
                </Button>

                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                </Button>
            </CardActions>
        </Card>
    )
}
export default CardsListItem
