import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import About from 'pages/About/About'
import Home from 'pages/Home/Home'
import OurServices from 'pages/Our_services/OurServices'
import Reservation from 'pages/Reservation/Reservation'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch } from 'redux/hooks'
import { useEffect, useState } from 'react'
import { fetchItems } from 'redux/CardListRedux/itemReducer'
import ContactUs from 'pages/ContactUs/ContactUs'

type Props = {}

type PriceListData = {
    totalPrice: number
}

const App = (props: Props) => {
    const [priceData, setPriceData] = useState<PriceListData>({
        totalPrice: 0,
    })

    const checkToCart = (price: number) => {
        setPriceData((prevState) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

    const uncheckFromCart = (price: number) => {
        setPriceData((prevState) => ({
            totalPrice: prevState.totalPrice - price,
        }))
    }

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchItems())
    })
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route
                    path="services"
                    element={
                        <OurServices
                            checkToCart={checkToCart}
                            uncheckFromCart={uncheckFromCart}
                        />
                    }
                />
                <Route path="contactus" element={<ContactUs />} />
                <Route
                    path="reservation"
                    element={
                        <Reservation
                            priceData={priceData}
                            checkToCart={checkToCart}
                            uncheckFromCart={uncheckFromCart}
                        />
                    }
                />
            </Routes>
            <Footer />
        </>
    )
}
export default App
