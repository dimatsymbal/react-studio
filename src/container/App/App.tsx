import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import About from 'pages/About/About'
import Home from 'pages/Home/Home'
import Our_services from 'pages/Our_services/Our_services'
import Reservation from 'pages/Reservation/Reservation'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

type Props = {}

type productsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<productsInCart>({
        1: 1,
    })

    const addProductToCart = (id: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: prevState[id],
        }))
    }
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route
                    path="services"
                    element={
                        <Our_services addProductToCart={addProductToCart} />
                    }
                />
                <Route
                    path="reservation"
                    element={<Reservation productsInCart={productsInCart} />}
                />
            </Routes>
            <Footer />
        </>
    )
}
export default App
