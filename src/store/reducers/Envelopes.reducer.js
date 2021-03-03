export const SHEETS = 'SHEETS';
export const TYPE_SHEETS = 'TYPE_SHEETS';
export const FAILURE_SHEETS = 'FAILURE_SHEETS';
export const INDEX_SHEETS = 'INDEX_SHEETS'


export const initialState = {
    sheets: {},
    index: '',
    type: '',
    error: ''
 }
 
export function envelopesReducer (state = initialState, action) {
  switch (action.type){
    case SHEETS:
      return {
        ...state,
        sheets: action.payload
      }
    case FAILURE_SHEETS:
      return {
        ...state,
        error: action.payload
      }
    case INDEX_SHEETS:
      return {
        ...state,
        index: action.payload
      }
    case TYPE_SHEETS:
      return {
        ...state,
        type: action.payload
      }
    default:
      return state
   }
}