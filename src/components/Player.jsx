import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
/*
instead of doing !isEditing, we'll do editing=> !editing because its a good practice.
as when it is called it will schedule the state update, but if we edit again the value
the last scheduled state will be incorrect.
So in this way we have a guaranty that well always be working with the lates state.
*/
  function handleEditClick() {
    setIsEditing(editing => !editing);
  }
  function handleChange(event){
    setName(event.target.value);
  }
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={name} onChange={handleChange}/>;
  }

  return (
    <li className={isActive? 'active':null}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
