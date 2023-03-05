import MenuItem from './MenuItem'
type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu_in_nav">
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="about">About</MenuItem>
            <MenuItem to="/services">Our Services</MenuItem>
            <MenuItem to="/Contact">Contact Us</MenuItem>
        </div>
    )
}
export default Menu
