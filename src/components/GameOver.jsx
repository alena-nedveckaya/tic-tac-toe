export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <div>{winner} won!</div>}
      {!winner && <div>It's a draw</div>}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}
