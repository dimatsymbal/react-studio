import Slider_block from './Slider_about/Slider_block'
import Map from './Map/Map'
import Text_block from './Text_block/Text_block'
type Props = {}
const About = (props: Props) => {
    return (
        <>
            <Slider_block />
            <Text_block />
            <Map />
        </>
    )
}
export default About
