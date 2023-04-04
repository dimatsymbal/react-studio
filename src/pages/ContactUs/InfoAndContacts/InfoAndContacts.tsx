import PopUp from 'components/PopUp/PopUp'
import { useState } from 'react'
import './InfoAndContacns.scss'

type Props = {}
const InfoAndContacns = (props: Props) => {
    const [modalActive, setModalActive] = useState<boolean>(false)

    return (
        <div className="InfoAndContacns">
            <div className="container">
                <h2>Work Details</h2>
                <div className="row">
                    <div className="col">
                        <img src="/images/workDetails.jpg" alt="workDetails" />
                    </div>
                    <div className="col">
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto aut hic esse rem, voluptatem, eius,
                            facere tempore quod sapiente laboriosam provident
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente, doloribus eos repellat distinctio
                            veritatis dolorem! Dolorum vero ullam aliquam
                            perspiciatis, itaque quia nulla consectetur,
                            similique, illum dolore sapiente hic quis.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eveniet debitis consequuntur quidem voluptate
                        </p>
                        <br />
                        <h4>
                            If you want to work in our beauty space - send your
                            CV using links below or fill iut the forb by
                            clicking the button under the links
                        </h4>

                        <ul>
                            <li>
                                <a href="/">Instagram</a>
                            </li>
                            <li>
                                <a href="/">Mail</a>
                            </li>
                            <li>
                                <a href="/">LinkedIn</a>
                            </li>
                            <li>
                                <a href="/">Facebook</a>
                            </li>
                        </ul>

                        <button
                            onClick={() => setModalActive(true)}
                            className="workFormBtn"
                        >
                            fill the form
                        </button>
                    </div>
                </div>
                <PopUp active={modalActive} setActive={setModalActive} />
            </div>
        </div>
    )
}
export default InfoAndContacns
