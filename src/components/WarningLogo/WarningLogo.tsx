import warning_logo from 'assets/WARNING_logo.jpg'

import './warning_logo.css'
type Props = {}
const WarningLogo = (props: Props) => {
    return <img className="warning_logo" src={warning_logo} alt="fake shop" />
}
export default WarningLogo
