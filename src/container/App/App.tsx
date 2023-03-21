import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import About from 'pages/About/About'
import Home from 'pages/Home/Home'
import OurServices from 'pages/Our_services/OurServices'
import Reservation from 'pages/Reservation/Reservation'
import { Route, Routes } from 'react-router-dom'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<OurServices />} />
                <Route path="reservation" element={<Reservation />} />
            </Routes>
            <Footer />
        </>
    )
}
export default App
