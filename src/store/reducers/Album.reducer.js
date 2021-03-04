export const UPDATE_ALBUM = 'UPDATE_ALBUM';

export const initialState = {
  sheetsAlbum: {
    films: [1,2,3,4,5,6],
    people: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],
    starships: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
  }
 }
 
 function changeItemToAlbum( stateSheets, sheet ){
   stateSheets[sheet.type].splice(sheet.number-1, 1, sheet.sheet);
   const newArray = stateSheets[sheet.type];
   return{ ...stateSheets, newArray }
 }

 export function albumReducer (state = initialState, action) {
   switch (action.type){
     case UPDATE_ALBUM:
       return {
         ...state,
         sheetsAlbum: changeItemToAlbum(state.sheetsAlbum, action.payload)
       }
     default:
       return state
   }
 }