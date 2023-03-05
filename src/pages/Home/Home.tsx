import Guest_block from './Guest Block/Guest_block'
import Lifestyle_block from './Lifestyle Block/Lifestyle_block'
import Checkbox_block from './Checkbox Block/Checkbox_block'
type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Guest_block />
            <Lifestyle_block />
            <Checkbox_block />
        </>
    )
}
export default Home
