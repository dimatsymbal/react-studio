import Button from '@mui/material/Button'
// import { Link } from 'react-router-dom'
import './Menu.css'
type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu_in_nav">
            <Button className="link">Home</Button>
            <Button className="link">About</Button>
            <Button className="link">Our Services</Button>
            <Button className="link">Contact Us</Button>
        </div>
    )
}
export default Menu
