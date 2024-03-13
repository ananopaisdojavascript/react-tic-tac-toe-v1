/* eslint-disable no-unused-vars */
// Componente que vai receber o histórico do jogo
import { useState } from "react";
import Board from "./Board"

const Game = () => {
  // Determinar o estado que vai fazer aparecer "X" ou "O" no tabuleiro
  // Valor booleano que vai determinar qual jogada será feita e o estado do jogo será salvo
  
  // Armazenar o estado do jogo no componente "Board"
  // Declarar uma variável que vai receber um vetor de 9 quadrados com valor nulo (null)
  const [history, setHistory] = useState([Array(9).fill(null)])
  
  // Jogada atual
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0
  const currentSquare = history[currentMove]

  const handlePlay = nextSquare => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  // Próxima jogada
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove)
  }

  const moves = history.map((_squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move ${move}`
    } else {
      description = "Go to game start."
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game