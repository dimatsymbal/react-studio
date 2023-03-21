import SliderComp from 'components/SliderComp/SliderComp'
import './SliderBlock.scss'

type Props = {}
const SliderBlock = (props: Props) => {
    return (
        <div className="Slider_block">
            <div className="container">
                <h2 className="title_Slider_block">Our interior</h2>
                <SliderComp />
            </div>
        </div>
    )
}
export default SliderBlock
