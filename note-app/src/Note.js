import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Note = ({ note, onDelete }) => {
  return (
    <div className="note">
      <p>{note.text}</p>
      <button onClick={() => onDelete(note.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Note;
