import './Our_services.scss'
import Card_list from 'components/Cards/Card_list'
import Price_list from './Price_list/Price_list'

type Props = {
    addProductToCart: (id: number) => void
}

const Our_services = ({ addProductToCart }: Props) => {
    return (
        <div className="Our_services">
            <div className="container_Our_services">
                <Price_list />
                <Card_list addProductToCart={addProductToCart} />
            </div>
        </div>
    )
}
export default Our_services
