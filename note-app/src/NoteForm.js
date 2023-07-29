import React, { useState } from 'react';

const NoteForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      text: text
    };
    onAdd(newNote);
    setText('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Type your note here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button>Add Note</button>
    </form>
  );
};

export default NoteForm;
