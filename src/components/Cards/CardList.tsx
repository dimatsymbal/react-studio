import CardsListItem from './CardsListItem'
import './CardList.scss'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
    changeSortTypeOnAlphabet,
    changeSortTypeOnLikesDown,
    changeSortTypeOnLikesUp,
    changeSortTypeOnPriceDown,
    changeSortTypeOnPriceUp,
} from 'redux/CardListRedux/itemReducer'

type Props = {}

type Items = {
    id: number
    image: string
    title: string
    paragraph: string
    price: number
    likes: number
}

const CardList = (props: Props) => {
    const items = useAppSelector((state) => state.items)
    const dispatch = useAppDispatch()

    return (
        <div className="Card_list">
            <h2 className="title_in_card_list">
                Our best body and mind programs
            </h2>

            <div className="dropdown">
                <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Sort by
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <button
                            onClick={() => dispatch(changeSortTypeOnPriceUp())}
                        >
                            price dorogo
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                dispatch(changeSortTypeOnPriceDown())
                            }
                        >
                            price chip
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => dispatch(changeSortTypeOnLikesUp())}
                        >
                            likes mbogo
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() =>
                                dispatch(changeSortTypeOnLikesDown())
                            }
                        >
                            likes malo
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => dispatch(changeSortTypeOnAlphabet())}
                        >
                            likes alphabet
                        </button>
                    </li>
                </ul>
            </div>

            <div className="block_with_cards">
                <div className="row">
                    {items
                        .slice()
                        .map(
                            ({
                                id,
                                image,
                                title,
                                paragraph,
                                price,
                                likes,
                            }: Items) => (
                                <div className="col" key={id}>
                                    <CardsListItem
                                        id={id}
                                        image={image}
                                        title={title}
                                        paragraph={paragraph}
                                        price={price}
                                        likes={likes}
                                    />
                                </div>
                            )
                        )}
                </div>
            </div>
        </div>
    )
}
export default CardList
