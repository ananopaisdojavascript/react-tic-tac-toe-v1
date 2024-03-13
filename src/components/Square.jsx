// Props: dados que são passados do componente mãe para o componente filho

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}

export default Square