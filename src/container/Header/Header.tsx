import './header-style.css'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CallIcon from '@mui/icons-material/Call'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import { Button } from '@mui/material'
import MenuItem from 'components/Menu/MenuItem'
import { Link } from 'react-router-dom'

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

                <div className="dropdown">
                    <a
                        className="btn dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </a>

                    <ul className="dropdown-menu">
                        <li>
                            <MenuItem to="/">Home</MenuItem>
                        </li>
                        <li>
                            <MenuItem to="about">About</MenuItem>
                        </li>
                        <li>
                            <MenuItem to="/services">Our Services</MenuItem>
                        </li>
                        <li>
                            <MenuItem to="/contact">Contact Us</MenuItem>
                        </li>
                        <Button className="call_btn_header_adaptive">
                            {' '}
                            <CallIcon /> Call Us - (+22) 123 456 7890
                        </Button>
                    </ul>
                </div>

                <Menu />

                <button className="reservation_btn_header">
                    <CalendarMonthIcon />
                    <Link className="reservationLink" to="/reservation">
                        Reservation
                    </Link>
                </button>
            </Toolbar>
        </AppBar>
    )
}
export default Header
