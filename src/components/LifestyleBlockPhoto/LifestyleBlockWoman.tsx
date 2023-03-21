import lifestyle_block_woman_logo from 'assets/lifestyle_block_woman_logo.jpg'

import './LifestyleBlockWoman.css'

type Props = {}
const LifestyleBlockWoman = (props: Props) => {
    return (
        <img
            className="lifestyle_block_woman_logo"
            src={lifestyle_block_woman_logo}
            alt="lifestyle_block_woman_logo"
        />
    )
}
export default LifestyleBlockWoman
