import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import About from 'pages/About/About'

import Home from 'pages/Home/Home'
import Our_services from 'pages/Our_services/Our_services'
import { Route, Routes } from 'react-router-dom'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Our_services />} />
            </Routes>
            <Footer />
        </>
    )
}
export default App
