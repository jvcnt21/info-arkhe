import React from 'react';
import './BotaoMecanismo.css';

const BotaoMecanismo = ({ onClick, icone, variant = 'outlined', children }) => {
  return (
    <div className="botao-wrapper">
      <button className={`botao-mecanismo ${variant}`} onClick={onClick}>
        {children}
      </button>
      <div className="icone-botao">
        <img src={icone} alt="" />
      </div>
    </div>
  );
};

export default BotaoMecanismo;