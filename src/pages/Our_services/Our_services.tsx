import './Our_services.scss'
import Card_list from 'components/Cards/Card_list'
import Price_list from './Price_list'

type Props = {}

const Our_services = (props: Props) => {
    return (
        <div className="Our_services">
            <div className="container_Our_services">
                <Price_list />
                <Card_list />
            </div>
        </div>
    )
}
export default Our_services
