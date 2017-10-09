import React from 'react';

const Hello = ({ username }) => {
  return (
    <div className="hello">
      HELLO <br/> <span>{username}</span>
    </div>
  );
};

export default Hello;
