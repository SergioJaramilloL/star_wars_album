import '../components/styles/Envelopes.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../components/Title';
import GetSheetsButton from '../components/GetEnvelopesButton';
import Sheet from '../components/Sheet';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  addFilms,
  addPeople, 
  addStarships,
  addEnvelopes,
  openEnvelopeAction
} from '../store/actions/Envelopes.action';
import { openEnvelope } from '../components/utils/openEnvelope';

function Envelopes() {
  const dispatch = useDispatch();
  const data = useSelector(
    ({ envelopesReducer: { ...state } }) => {
      return { ...state }
    });
  const sendData = data;
    
  useEffect(() => {
    dispatch(addFilms());
    dispatch(addPeople());
    dispatch(addStarships());
  }, [dispatch]);

  if( data.envelopes.length < 1 ){
    return (
      <GetSheetsButton
        onGetEnvelopes = {onGetEnvelopes}
      />
    )
  }

  function onGetEnvelopes (event) {
    event.preventDefault();
    const envelopes = [1,2,3,4];
    dispatch(addEnvelopes(envelopes));
  }

  function onOpenEnvelope (event, index, sendData) {
    event.preventDefault();
    const sheets = openEnvelope(sendData);
    dispatch(openEnvelopeAction({sheets, index}));
  }

  console.log('Porfin lo hice', data);
  return(
    <div className="container">
      <Title titleText = {'Mis sobres'}></Title>
      <div className="container__content">
        <div className="container__content--envelopes">
          {data.envelopes.length > 0 &&
          data.envelopes.map((item, index) => {
            return (
              <button 
                key= {index}
                className="envelopes__button"
                title="Presiona para abrir"
                onClick = { event => onOpenEnvelope(event, index, sendData)}
              >
                <FontAwesomeIcon icon={faEnvelope}/>
              </button>
            )
          })}
        </div>
        <div className="container__content--sheets">
          {data.envelopes.length > 0 &&
          data.envelopes.map((envelope) => {
            return(
              envelope.length > 0 &&
              envelope.map((sheet, index) => {
                return(
                <div
                  key={index}
                  className="sheets__item"
                >
                  { sheet.type === 'Pelicula' ? (
                    <Sheet
                      type = {sheet.type}
                      name = {sheet.sheet.title}
                      category = {sheet.category}
                      number = {sheet.number}
                    />
                  ) : (
                    <Sheet
                    type = {sheet.type}
                    name = {sheet.sheet.name}
                    category = {sheet.category}
                    number = {sheet.number}
                  />
                  )}
                  <button
                    className="sheets__item--button"
                  >Agregar al album</button>
                </div>
                )
              })
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Envelopes