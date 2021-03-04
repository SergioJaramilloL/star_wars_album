import './styles/Sheet.scss'

function Sheet({
  type,
  name,
  category,
  number
}) {
  return(
    <>
    <div className="containerSheet">
      <div
        className="containerSheet__main"
      >
        <label
          className="containerSheet__main--type"
        >{type}</label>
        <h3>{name}</h3>
      </div>
      <label
        className="containerSheet__main--category"
      >Lamina {category}</label>
      <label
        className="containerSheet--number"
      >{number}</label>
    </div>
    </>
  )
}

export default Sheet;