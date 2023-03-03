import lifestyle_block_woman_logo from 'assets/lifestyle_block_woman_logo.jpg'

import './Lifestyle_block_woman_logo.css'

type Props = {}
const Lifestyle_block_woman = (props: Props) => {
    return (
        <img
            className="lifestyle_block_woman_logo"
            src={lifestyle_block_woman_logo}
            alt="fake shop"
        />
    )
}
export default Lifestyle_block_woman
