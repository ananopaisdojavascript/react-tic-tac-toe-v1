/* eslint-disable no-unused-vars */
import Square from "./Square";
import "./Style.css";
// Componente que será os quadradinhos do tabuleiro do jogo
// Esse componente será exportado para o arquivo App.jsx (ou para qualquer parte do projeto)

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = ({ xIsNext, squares, onPlay }) => {
  // Cada quadradinho é um botão
  // O botão é um elemento JSX (combinação de código JS com marcadores HTML)
  // As classes de estilização recebem o nome de "className"
  // (Class é uma palavra reservada do JS)
  // Componentes no React precisam retornar um único elemento JSX
  // Passar esses valores para o quadradinhos do tabuleiro
  // Função para aparecer um "X" ao clicar no botão
  
  const handleClick = (i) => {
    // Evitar que "O" substitua "X" e vice-versa
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const nextSquare = squares.slice() // Cria um cópia do vetor "squares" com o método .slice()
    if (xIsNext) {
      nextSquare[i] = "X"
    } else {
      nextSquare[i] = "O"
    }
    // Atualiza o valor de qualquer quadrado para "X" ou "O"
    onPlay(nextSquare)
  }

  // Mostrar o vencedor do jogo
  const winner = calculateWinner(squares)
  let status;
  if (winner) {
    status = `The winner is ${winner}`
  } else {
    status = `Next player: ${(xIsNext ? "X" : "O")}`
  }

  return (
    <section>
      <div>{status}</div>
      <div className="board-row">
        {/* Chamar onSquareClick como se fosse uma função, para não causar "loop" infinito */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </section>
  )
}

export default Board