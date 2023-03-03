import Container from '@mui/material/Container'
import Guest_block from './Guest Block/Guest_block'
import Lifestyle_block from './Lifestyle Block/Lifestyle_block'
type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Guest_block />
            <Lifestyle_block />
        </>
    )
}
export default Home
