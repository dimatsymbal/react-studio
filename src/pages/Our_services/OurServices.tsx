import './OurServices.scss'
import CardList from 'components/Cards/CardList'
import PriceList from './PriceList/PriceList'

type Props = {
    checkToCart: (price: number) => void
    uncheckFromCart: (price: number) => void
}

const OurServices = ({ checkToCart, uncheckFromCart }: Props) => {
    return (
        <div className="Our_services">
            <div className="container_Our_services">
                <PriceList
                    checkToCart={checkToCart}
                    uncheckFromCart={uncheckFromCart}
                />
                <CardList />
            </div>
        </div>
    )
}
export default OurServices
