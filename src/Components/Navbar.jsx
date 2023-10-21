export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li><a href="#" className="active">Shop</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Kids</a></li>
          <li><a href="#" className="LogIn">Login</a></li>
        </ul>
      </div>
    </nav>
  )
}