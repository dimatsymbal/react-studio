import './header-style.css'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CallIcon from '@mui/icons-material/Call'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import { Button } from '@mui/material'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar className="header">
            <Toolbar className="appbar">
                <Logo />

                <Button className="call_btn_header">
                    {' '}
                    <CallIcon /> Call Us - (+22) 123 456 7890
                </Button>

                <Menu />

                <div className="links_in_adaptive">
                    <button className="burger_btn_header">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="currentColor"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </button>
                </div>

                <button className="reservation_btn_header">
                    <CalendarMonthIcon />
                    Reservation
                </button>
            </Toolbar>
        </AppBar>
    )
}
export default Header
