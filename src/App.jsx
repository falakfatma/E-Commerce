import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
export default function App() {
  return (
    <main>
      {/* Colour combination */}
       {/* purple and white ,pink, blue, brown, or gray */}
      {/* navbar
      main = hero page
      exclusive offer
      new collection
      featured products
      footer */}
      <Navbar />
      <Hero />
      <Cards />
    </main>
  )
}
