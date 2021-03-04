import './styles/GetEnvelopesButton.scss';

function GetEnvelopesButton ({ onGetEnvelopes }){

  return(
    <button
      className = 'getEnvelopes'
      onClick = {onGetEnvelopes}
    >Obtener sobres</button>
  )
}

export default GetEnvelopesButton;