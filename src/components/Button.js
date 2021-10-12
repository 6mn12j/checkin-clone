import React from 'react';

const Button = ({ className, handleClick, text }) => {
  return (
    <div style={{ width: '100%' }}>
      <button className={className} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
