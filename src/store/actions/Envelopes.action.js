import axios from 'axios';
import {
  FILMS_SHEETS,
  PEOPLE_SHEETS,
  STARSHIPS_SHEETS,
  ENVELOPE_SHEETS,
  FAILURE_SHEETS,
  ADD_SHEETS
} from '../reducers/Envelopes.reducer';

export function addFilms() {
  return async function (dispatch){
    try{
      const { data } = await axios.get(`https://swapi.dev/api/films/`);
      dispatch({ type: FILMS_SHEETS, payload: data.results });
    } catch (error) {
      dispatch({ type:FAILURE_SHEETS, payload: error });
    } 
  }
}

export function addPeople() {
  return async function (dispatch){
    const prevSheets = [];
    for( let i=1; i<=9; i++) {
      try{
        const { data } = await axios.get(`https://swapi.dev/api/people/?page=${i}`);
        prevSheets.push(data.results);
      } catch (error) {
        dispatch({ type:FAILURE_SHEETS, payload: error });
      } 
    }
    const sheets = prevSheets.reduce(function(memo, elem){
      return memo.concat(elem);
    }, []);
    dispatch({ type: PEOPLE_SHEETS, payload: sheets });
  }
}

export function addStarships() {
  return async function (dispatch){
    const prevSheets = [];
    for( let i=1; i<=4; i++){
      try{
        const { data } = await axios.get(`https://swapi.dev/api/starships/?page=${i}`);
        prevSheets.push(data.results);
      } catch (error) {
        dispatch({ type:FAILURE_SHEETS, payload: error });
      }
    } 
    const sheets = prevSheets.reduce(function(memo, elem){
      return memo.concat(elem);
    }, []);
    dispatch({ type: STARSHIPS_SHEETS, payload: sheets });
  }
}

export function addEnvelopes(arrEnvelopes) {
  return function (dispatch){
    dispatch({ type:ENVELOPE_SHEETS, payload: arrEnvelopes });
  }
}

export function openEnvelopeAction(currentEnvelope){
  return function (dispatch){
    dispatch({ type:ADD_SHEETS, payload: currentEnvelope });
  }
}