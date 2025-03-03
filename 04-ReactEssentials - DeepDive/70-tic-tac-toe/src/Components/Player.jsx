import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  return (
    <>
      <li>
        <span className="=Player">
          {isEditing ? (
            <input type="text"></input>
          ) : (
            <span className="player-name">{name}</span>
          )}

          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
