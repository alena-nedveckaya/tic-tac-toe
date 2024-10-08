import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onSave }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const hangleEditClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onSave(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing)
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={hangleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
