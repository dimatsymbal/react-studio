import logo from 'assets/navbar_logo.jpg'
import Typography from '@mui/material/Typography'
import './logo.css'
type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className="logo_header" src={logo} alt="fake shop" />
        </Typography>
    )
}
export default Logo
