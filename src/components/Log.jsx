export default function Log({ turns }) {
  const logs = turns.map((log) => (
    <li key={`${log.square.row}${log.square.col}`}>
      {log.player} selected {log.square.row},{log.square.col}
    </li>
  ));

  return <ol id="log">{logs}</ol>;
}
