import React, { useState } from 'react';

const CardCreator = () => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCreateCard = () => {
    const newCard = {
      title: title,
      content: content
    };
    setCards([...cards, newCard]);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <textarea
          placeholder="Content"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <button onClick={handleCreateCard}>Create Card</button>
      <div>
        {cards.map((card, index) => (
          <div key={index}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCreator;