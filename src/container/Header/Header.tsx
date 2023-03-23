import './Header.scss'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CallIcon from '@mui/icons-material/Call'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import TemporaryDrawer from 'components/AdaptiveHeaderBtn/AdaptiveHeaderBtn'

type Props = {}
const Header = (props: Props) => {
    return (
        <div className="header">
            <div className="header_container">
                <Logo />

                <Button className="call_btn_header">
                    {' '}
                    <CallIcon /> Call Us - (+22) 123 456 7890
                </Button>

                <div className="slideMenu">
                    <TemporaryDrawer />
                </div>

                <Menu />

                <button className="reservation_btn_header">
                    <CalendarMonthIcon />
                    <Link className="reservationLink" to="/reservation">
                        Reservation
                    </Link>
                </button>
            </div>
        </div>
    )
}
export default Header
