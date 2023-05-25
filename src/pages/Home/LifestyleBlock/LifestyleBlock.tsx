import './LifestyleBlock.scss'
import LifestyleBlockWoman from 'components/LifestyleBlockPhoto/LifestyleBlockWoman'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'
//библиотекой react-responsive для определения
//текущего состояния медиа-запроса внутри вашего компонента React.

type Props = {}
const LifestyleBlock = (props: Props) => {
    AOS.init()
    // В этом примере мы используем хук useMediaQuery из библиотеки react-responsive
    // для определения состояния медиа-запроса maxWidth: 900. Значение isMobile будет true,
    // если ширина окна меньше 900 пикселей, и false в противном случае.
    const isMobile = useMediaQuery({ maxWidth: 900 })

    return (
        <div className="lifestyle_block">
            <div className="container_lifestyle_block">
                <div
                    className="left"
                    data-aos={isMobile ? 'fade-down' : 'fade-left'}
                    data-aos-duration="1000"
                >
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

                <div
                    className="right"
                    data-aos={isMobile ? 'fade-down' : 'fade-right'}
                    data-aos-duration="1000"
                >
                    <LifestyleBlockWoman />
                    <img
                        className="lifestyleBlockBack"
                        src="/images/lifestyleBlockBack.png"
                        alt="lifestyleBlockBack"
                    />
                </div>
            </div>
        </div>
    )
}
export default LifestyleBlock
