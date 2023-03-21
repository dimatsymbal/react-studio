import guest_block_woman_logo from 'assets/guest_block_woman_logo.jpg'

import './GuestBlockPhoto.css'
type Props = {}
const GuestBlockPhoto = (props: Props) => {
    return (
        <img
            className="guest_block_woman_logo"
            src={guest_block_woman_logo}
            alt="guest_block_woman_logo"
        />
    )
}
export default GuestBlockPhoto
