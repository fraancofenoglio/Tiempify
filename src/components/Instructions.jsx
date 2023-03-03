
const Instructions = ({night}) => {
  return (
    <div className="instructions-container">
        <h2 style={night ? {textShadow: "none"} : {textShadow: "1px 1px 3px #333333"}}>Acá se va a mostrar el tiempo en la ciudad elegida.<br></br> Tenés que escribir una ciudad y el país al que pertenece.</h2>
    </div>
  )
}

export default Instructions