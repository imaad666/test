import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('App');

  const handleClick = () => {
    setText('Updated');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
