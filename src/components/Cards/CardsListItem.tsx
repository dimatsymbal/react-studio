import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './CardListItem.scss'
import { Button } from '@mui/material'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

type Props = {
    id: number
    img: string
    title: string
    paragraph: string
    hide_paragraph: string
}

const CardsListItem = ({
    id,
    img,
    title,
    paragraph,
    hide_paragraph,
}: Props) => {
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Card className="Card">
            <img className="Card-img" src={img} alt="lost img" />
            <CardContent>
                <h2 className="card-title">{title}</h2>
                <p className="card-paragraph">{paragraph}</p>
            </CardContent>
            <CardActions disableSpacing>
                <Button>add</Button>

                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton> */}

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <p className="hide-card-paragraph">{hide_paragraph}</p>
                </CardContent>
            </Collapse>
        </Card>
    )
}
export default CardsListItem
