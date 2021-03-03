import '../components/styles/Album.scss';
import Title from '../components/Title';
import { useSelector } from 'react-redux';

function Album() {
  const data = useSelector(
    ({ albumReducer: { ...state } }) => {
      return { ...state }
  });

  return(
    <div className="container">
      <Title titleText = {'Mi álbum'}></Title>
      <div className="container__Album">
        <div className="container__Album--category">
          <h4 className="category__title">Películas</h4>
          <div className="category__card">
            {data.sheetsAlbum.films.map(( film, index ) => {
              return(
                <div 
                  key = {index}
                  className="category__card--item"
                >
                  <h4>{film}</h4>
                </div>
              )
            })}
          </div>
        </div>
        <div className="container__Album--category">
          <h4 className="category__title">Personajes</h4>
          <div className="category__card">
            {data.sheetsAlbum.people.map(( people, index ) => {
              return(
                <div 
                  key = {index}
                  className="category__card--item"
                >
                  <h4>{people}</h4>
                </div>
              )
            })}
          </div>
        </div>
        <div className="container__Album--category">
          <h4 className="category__title">Naves</h4>
          <div className="category__card">
            {data.sheetsAlbum.starships.map(( starships, index ) => {
              return(
                <div 
                  key = {index}
                  className="category__card--item"
                >
                  <h4>{starships}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album