import './OurServices.scss'
import CardList from 'components/Cards/CardList'
import PriceList from './PriceList/PriceList'

type Props = {}

const OurServices = (props: Props) => {
    return (
        <div className="Our_services">
            <div className="container_Our_services">
                <PriceList />
                <CardList />
            </div>
        </div>
    )
}
export default OurServices
