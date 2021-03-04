import './styles/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <>
      <header>
          <div>
            <img
              src = "https://res.cloudinary.com/dpklpjhm2/image/upload/v1614631826/logo_starWars_gak9wf.png"        
              alt = "Logo Star Wars"
              />
          </div>
          <nav>
            <ul>
              <li
                title = "Aquí ves como va tu álbum"
              ><Link to="/">Álbum</Link></li>
              <li 
                title = "Aquí abres un sobre de laminas"
              ><Link to="/envelopes">Sobres</Link></li>
            </ul>
          </nav> 
      </header>
    </>
  );
}

export default Header;