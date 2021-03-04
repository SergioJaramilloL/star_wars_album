export const FILMS_SHEETS = 'FILMS_SHEETS';
export const PEOPLE_SHEETS = 'PEOPLE_SHEETS';
export const STARSHIPS_SHEETS = 'STARSHIPS_SHEETS';
export const ENVELOPE_SHEETS = 'ENVELOPE_SHEETS';
export const FAILURE_SHEETS = 'FAILURE_SHEETS';
export const INDEX_SHEETS = 'INDEX_SHEETS';
export const ADD_SHEETS = 'ADD_SHEETS';


export const initialState = {
    films: [],
    people: [],
    starships: [],
    error: '',
    envelopes: []
 }
 
function changeItemToState( stateEnvelopes, currentEnvelope ) {
  stateEnvelopes.splice(currentEnvelope.index, 1, currentEnvelope.sheets);
  return stateEnvelopes;
}

export function envelopesReducer (state = initialState, action) {
  switch (action.type){
    case FILMS_SHEETS:
      return {
        ...state,
        films: action.payload
      }
    case PEOPLE_SHEETS:
      return {
        ...state,
        people: action.payload
      }
    case STARSHIPS_SHEETS:
      return {
        ...state,
        starships: action.payload
      }
    case FAILURE_SHEETS:
      return {
        ...state,
        error: action.payload
      }
    case ENVELOPE_SHEETS:
      return {
        ...state,
        envelopes: action.payload
      }
    case ADD_SHEETS:
      return{
        ...state,
        envelopes: changeItemToState(state.envelopes, action.payload)
      }
    default:
      return state
   }
}