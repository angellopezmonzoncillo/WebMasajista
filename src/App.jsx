import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import BenefitsPage from './pages/BenefitsPage'
import ContactPage from './pages/ContactPage'
import BookingPage from './pages/BookingPage'

function ScrollToTop() {
  // Scroll to top on route change
  return null
}

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0e1b13] dark:text-white min-h-screen flex flex-col font-display">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
