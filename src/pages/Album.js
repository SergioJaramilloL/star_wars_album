import '../components/styles/Album.scss';
import Title from '../components/Title'

function Album() {
  return(
    <div className="container">
      <Title titleText = {'Mi álbum'}></Title>
      <div className="container__Album">
        <div className="container__Album--category">
          <h4 className="category__title">Películas</h4>
          <div className="category__card">
            <div className="category__card--item">
              <h4>Número</h4>
            </div>
          </div>
        </div>
        <div className="container__Album--category">
          <h4 className="category__title">Personajes</h4>
          <div className="category__card">
            <div className="category__card--item">
                <h4>Número</h4>
            </div>
          </div>
        </div>
        <div className="container__Album--category">
          <h4 className="category__title">Naves</h4>
          <div className="category__card">
            <div className="category__card--item">
                <h4>Número</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album