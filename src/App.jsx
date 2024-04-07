import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AllDesigns from './components/AllDesigns'
import Footer from './components/Footer'
import Divider from './components/Divider'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <h1 className="mb-4 text-4xl font-bold">Design Parts :</h1>
      <Divider />
      <AllDesigns />
      <Divider />
      <Footer />
    </>
  )
}

export default App
