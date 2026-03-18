import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          📋 Tarefinhas
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projetos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/completed" className="nav-link">
              Histórico
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
