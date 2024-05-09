import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import SideNavbar from './Components/sideNavbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SideNavbar /> */}
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
