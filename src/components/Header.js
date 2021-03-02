import './styles/Header.scss';

function Header() {
  return(
    <>
      <header>
          <a>
            <img
              src = "https://res.cloudinary.com/dpklpjhm2/image/upload/v1614631826/logo_starWars_gak9wf.png"        
              alt = "Logo Star Wars"
              />
          </a>
          <nav>
            <ul>
              <li
                title = "Aquí ves como va tu álbum"
              ><a href ="/">Álbum</a></li>
              <li 
                title = "Aquí abres un sobre de laminas"
              ><a href ="/envelopes">Sobres</a></li>
            </ul>
          </nav> 
      </header>
    </>
  );
}

export default Header;