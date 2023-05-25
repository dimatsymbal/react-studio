import './Reviews.scss'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'

type Review = {
    name: string
    text: string
    country: string
}
type Props = {}
const Reviews = (props: Props) => {
    const isMobile = useMediaQuery({ maxWidth: 900 })
    AOS.init()

    const arrReviews: Review[] = [
        {
            name: 'James Williams',
            text: 'Made an appointment with Beautyness and it was the best experience in a salon I have ever had. They went above and beyond to make sure I got what I wanted, & patiently explained her process',
            country: 'United States, Nevada',
        },
        {
            name: 'Carolyn James',
            text: 'Ive been going to Beautyness they are always goes above and beyond my expectations and leaves my hair looking and feeling fantastic and looking exactly as I hoped, if not better',
            country: 'Ukraine',
        },
        {
            name: 'Victoria Backham',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam illo modi. Deleniti sapiente fuga enim quisquam saepe hic non harum unde. Ex ab quod cupiditate ipsam, vitae ducimus vero.',
            country: 'United Kingdom, London',
        },
    ]

    const [reviews, setReview] = useState<Review[]>(arrReviews)
    const [newReviews, setNewReview] = useState<Review>({
        name: '',
        text: '',
        country: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            country: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (
            newReviews.name === '' ||
            newReviews.country === '' ||
            newReviews.text === ''
        ) {
            alert('Please fill all fields to leave your review')
        } else if (newReviews.text.length > 300) {
            alert('Your review text mast be less then 300 simbols')
        } else {
            setNewReview({
                name: '',
                country: '',
                text: '',
            })
            setReview((prevState) => {
                return [...prevState, newReviews]
            })
        }
    }

    return (
        <div className="Reviews">
            <div className="container">
                <h6 className="subtitles">Testimonials</h6>
                <h2>What our Customers says...</h2>

                <div
                    className="reviewsBlock"
                    data-aos={isMobile ? 'fade-down' : 'fade-right'}
                    data-aos-duration="1000"
                >
                    <Carousel
                        variant="dark"
                        className="carouselReviewsBlock"
                        fade
                    >
                        {reviews.map((item, i) => (
                            <Carousel.Item
                                className="carouselReviewsBlockItem"
                                key={i}
                            >
                                <div className="topPartInReview">
                                    <p className="textReview">{item.text}</p>
                                </div>

                                <div className="lowerPartInReview">
                                    <div className="left">
                                        <h4>{item.name}</h4>
                                        <p>{item.country}</p>
                                    </div>
                                    <div className="right">
                                        <img
                                            id="reviewsImg"
                                            src="/images/reviewsImg.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div
                    className="form"
                    data-aos={isMobile ? 'fade-down' : 'fade-left'}
                    data-aos-duration="1000"
                >
                    <form action="" onSubmit={onSend}>
                        <h2>Please leave a review</h2>

                        <div className="firstTwoInputs">
                            <input
                                type="text"
                                placeholder="Your name"
                                value={newReviews.name}
                                onChange={handleName}
                            />
                            <input
                                type="text"
                                placeholder="Your place"
                                value={newReviews.country}
                                onChange={handleCountry}
                            />
                        </div>

                        <textarea
                            placeholder="What do you think about our service?"
                            value={newReviews.text}
                            onChange={handleText}
                        ></textarea>
                        <button className="reviewsSubmitBtn" type="submit">
                            Left a review
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Reviews
