import {
  UPDATE_ALBUM
} from '../reducers/Album.reducer'

export function updateAlbum(sheet){
  return function (dispatch){
    dispatch({ type:UPDATE_ALBUM, payload: sheet })
  }
}