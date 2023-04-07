import Button from '@mui/material/Button/Button'
import Card from '@mui/material/Card'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './BestSpecList.scss'
type Props = {}
const BestSpecList = (props: Props) => {
    return (
        <div className="BestSpecList">
            <div className="container">
                <h2>Our best specialists</h2>
                <div className="row">
                    <div className="col">
                        <Card className="card">
                            <img src="/images/specialist1.jpg" alt="" />
                            <h4 className="specialistName">Julia Depish</h4>
                            <p>Barber</p>
                            <hr />

                            <div className="socialButtonsGroup">
                                <Button>
                                    <TwitterIcon />
                                </Button>
                                <Button>
                                    <InstagramIcon />
                                </Button>
                                <Button>
                                    <FacebookIcon />
                                </Button>
                            </div>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="card">
                            <img src="/images/specialist2.jpg" alt="" />
                            <h4 className="specialistName">Olivia Dariush</h4>
                            <p>Make up artist</p>

                            <hr />

                            <div className="socialButtonsGroup">
                                <Button>
                                    <InstagramIcon />
                                </Button>
                                <Button>
                                    <FacebookIcon />
                                </Button>
                            </div>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="card">
                            <img src="/images/specialist3.jpg" alt="" />
                            <h4 className="specialistName">Mia James</h4>
                            <p>Massage artist</p>
                            <hr />
                            <div className="socialButtonsGroup">
                                <Button>
                                    <TwitterIcon />
                                </Button>
                                <Button>
                                    <LinkedInIcon />
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BestSpecList
