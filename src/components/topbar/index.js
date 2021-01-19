import { Link, NavLink } from 'react-router-dom'
import SearchBar from '../searchbar'
import './styles.css'

export default function TopBar() {
    return (
      <div className="topbar">
        <div className="topbar-content container">
          <Link className="link" to="/">
            LOGO
          </Link>
          <NavLink className="link" activeClassName="active" to="/best_rated">
            top rated
          </NavLink>
          <SearchBar></SearchBar>
        </div>
      </div>
    )
}
