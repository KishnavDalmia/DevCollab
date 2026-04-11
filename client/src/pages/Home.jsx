import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div className=' bg-black text-white font-poppins'>
      <Navbar />
      <Hero />
      <Features/>
      <Footer/>
    </div>
  )
}

export default Home