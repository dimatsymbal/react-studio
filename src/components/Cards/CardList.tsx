import CardsListItem from './CardsListItem'
import './CardList.scss'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
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
                            className="drop_btn"
                            onClick={() => dispatch(changeSortTypeOnPriceUp())}
                        >
                            from expensive to cheap
                        </button>
                    </li>
                    <li>
                        <button
                            className="drop_btn"
                            onClick={() =>
                                dispatch(changeSortTypeOnPriceDown())
                            }
                        >
                            from cheap to expensive
                        </button>
                    </li>
                    <li>
                        <button
                            className="drop_btn"
                            onClick={() => dispatch(changeSortTypeOnLikesUp())}
                        >
                            by likes
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
