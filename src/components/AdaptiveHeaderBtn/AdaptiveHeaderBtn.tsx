import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import MenuItem from 'components/Menu/MenuItem'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            setState({ ...state, [anchor]: open })
        }

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home'].map(() => (
                    <MenuItem to="/">Home</MenuItem>
                ))}
            </List>
            <List>
                {['About'].map(() => (
                    <MenuItem to="about">About</MenuItem>
                ))}
            </List>
            <List>
                {['Our Services'].map(() => (
                    <MenuItem to="/services">Our Services</MenuItem>
                ))}
            </List>
            <List>
                {['Contact Us'].map(() => (
                    <MenuItem to="/contact">Contact Us</MenuItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Cart'].map(() => (
                    <button className="reservation_btn_header">
                        <CalendarMonthIcon />
                        <Link className="reservationLink" to="/reservation">
                            Reservation
                        </Link>
                    </button>
                ))}
            </List>
        </Box>
    )

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    )
}
