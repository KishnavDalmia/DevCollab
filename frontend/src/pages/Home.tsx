import Navbar from '../components/Navbar.tsx'
import Hero from '../components/Hero.tsx'
import Features from '../components/Features.tsx'
import Footer from '../components/Footer.tsx'

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