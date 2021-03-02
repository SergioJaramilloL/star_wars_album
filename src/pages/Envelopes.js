import '../components/styles/Envelopes.scss';
import Title from '../components/Title';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Envelopes() {
  return(
    <div className="container">
      <Title titleText = {'Mis sobres'}></Title>
      <div className="container__content">
        <div className="container__content--envelopes">
          <button 
            className="envelopes__button"
            title="Presiona para abrir"
          >
            <FontAwesomeIcon icon={faEnvelope}/>
          </button>
        </div>
        <div className="container__content--sheets">
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

export default Envelopes