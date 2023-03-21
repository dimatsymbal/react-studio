import GuestBlock from './GuestBlock/GuestBlock'
import LifestyleBlock from './LifestyleBlock/LifestyleBlock'
import CheckboxBlock from './CheckboxBlock/Checkbox_block'
type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <GuestBlock />
            <LifestyleBlock />
            <CheckboxBlock />
        </>
    )
}
export default Home
