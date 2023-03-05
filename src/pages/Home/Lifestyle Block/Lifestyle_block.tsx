import './Lifestyle_block.scss'
import Lifestyle_block_woman from 'components/ls_photo/Lifestyle_block_woman'

type Props = {}
const Lifestyle_block = (props: Props) => {
    return (
        <div className="lifestyle_block">
            <div className="container_lifestyle_block">
                <div className="left">
                    <p className="subtitle_lifestyle_block">Take Your Care</p>
                    <h2 className="title_lifestyle_block">
                        Elevate Your Lifestyle by Bring Balance and Well Being
                        Into Your Life
                    </h2>
                    <p className="paragraph_lifestyle_block">
                        Designed to allow you to unwind and feel confident that
                        you’re in good, caring hands. Our first priority is
                        cleanliness. We have a full-time staff whose job is to
                        ensure that the environment at Beautyness remains.
                    </p>

                    <div className="block_with_squears">
                        <div className="squear">
                            <img
                                src="/images/squere1_in_lifestyle_block.jpg"
                                alt="squear1"
                            />
                        </div>
                        <div className="squear">
                            {' '}
                            <img
                                src="/images/squere2_in_lifestyle_block.jpg"
                                alt="squear2"
                            />
                        </div>
                        <div className="squear">
                            {' '}
                            <img
                                src="/images/squere3_in_lifestyle_block.jpg"
                                alt="squear3"
                            />
                        </div>
                    </div>
                </div>

                <div className="right">
                    <Lifestyle_block_woman />
                </div>
            </div>
        </div>
    )
}
export default Lifestyle_block
