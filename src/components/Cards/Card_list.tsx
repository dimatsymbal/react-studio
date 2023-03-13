import CardsListItem from './CardsListItem'
import itemsArrey from 'Utils/itemsArrey'
import './Card_list.scss'

type Props = {
    addProductToCart: (id: number) => void
}

type Items = {
    id: number
    img: string
    title: string
    paragraph: string
    hide_paragraph: string
}

const Card_list = ({ addProductToCart }: Props) => {
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
                            img,
                            title,
                            paragraph,
                            hide_paragraph,
                        }: Items) => (
                            <div className="col">
                                <CardsListItem
                                    id={id}
                                    img={img}
                                    title={title}
                                    paragraph={paragraph}
                                    hide_paragraph={hide_paragraph}
                                    addProductToCart={addProductToCart}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
export default Card_list
