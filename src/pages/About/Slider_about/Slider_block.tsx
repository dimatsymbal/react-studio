import Slider_comp from 'components/Slider_component/Slider_comp'
import './Slider_block.scss'

type Props = {}
const Slider_block = (props: Props) => {
    return (
        <div className="Slider_block">
            <div className="container">
                <h2 className="title_Slider_block">Our interior</h2>
                <Slider_comp />
            </div>
        </div>
    )
}
export default Slider_block
