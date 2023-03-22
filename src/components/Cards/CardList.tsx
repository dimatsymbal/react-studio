import CardsListItem from './CardsListItem'
import './CardList.scss'
import { useAppSelector } from 'redux/hooks'

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
    const itemsArrey = useAppSelector((state) => state.items)
    return (
        <div className="Card_list">
            <h2 className="title_in_card_list">
                Our best body and mind programs
            </h2>

            <div className="block_with_cards">
                <div className="row">
                    {itemsArrey.map(
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
