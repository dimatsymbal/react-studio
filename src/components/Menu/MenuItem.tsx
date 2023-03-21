import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import './MenuItem.css'
type Props = {
    to: string
    children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
    return (
        <Button>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'menu-item-active' : 'menu-item'
                }
            >
                {children}
            </NavLink>
        </Button>
    )
}
export default MenuItem
