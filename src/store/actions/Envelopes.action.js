import axios from 'axios';
import {
  SHEETS,
  FAILURE_SHEETS,
  INDEX_SHEETS,
  TYPE_SHEETS
} from '../reducers/Envelopes.reducer';

export function addFilms() {
  const rand = Math.floor(Math.random() * (6 - 1)) + 1;
  return async function (dispatch){
    try{
      const { data } = await axios.get(`https://swapi.dev/api/films/${rand}/`);
      dispatch({ type: SHEETS, payload: data });
      dispatch({ type: INDEX_SHEETS, payload: rand });
      dispatch({ type: TYPE_SHEETS, payload: 'films' });
    } catch (error) {
      dispatch({ type:FAILURE_SHEETS, payload: error });
    } 
  }
}
export function addPeople() {
  const rand = Math.floor(Math.random() * (82 - 1)) + 1;
  return async function (dispatch){
    try{
      const { data } = await axios.get(`https://swapi.dev/api/people/${rand}/`);
      dispatch({ type: SHEETS, payload: data });
      dispatch({ type: INDEX_SHEETS, payload: rand });
      dispatch({ type: TYPE_SHEETS, payload: 'people' });
    } catch (error) {
      dispatch({ type:FAILURE_SHEETS, payload: error });
    } 
  }
}
export function addStarships() {
  const rand = Math.floor(Math.random() * (32 - 1)) + 1;
  return async function (dispatch){
    try{
      const { data } = await axios.get(`https://swapi.dev/api/planets/${rand}/`);
      dispatch({ type: SHEETS, payload: data });
      dispatch({ type: INDEX_SHEETS, payload: rand });
      dispatch({ type: TYPE_SHEETS, payload: 'starships' });
    } catch (error) {
      dispatch({ type:FAILURE_SHEETS, payload: error });
    } 
  }
}