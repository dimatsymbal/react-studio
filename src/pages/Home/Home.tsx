import GuestBlock from './GuestBlock/GuestBlock'
import LifestyleBlock from './LifestyleBlock/LifestyleBlock'
import CheckboxBlock from './CheckboxBlock/Checkbox_block'
import SimpleSlider from 'components/SlickSlider/SlickSlider'
type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <GuestBlock />
            <SimpleSlider />
            <LifestyleBlock />
            <CheckboxBlock />
        </>
    )
}
export default Home
