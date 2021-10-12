import React from 'react';

const Input = ({ className, handleSubmit, placeholder, type, text }) => {
  return (
    <div>
      <input className={className} placeholder={placeholder} type={type}>
        {text}
      </input>
    </div>
  );
};

export default Input;
