import React from 'react';
import './ConteudoMecanismo.css';

const ConteudoMecanismo = ({ dados }) => {
  if (!dados) return null;

  return (
    <div className="container-conteudo-detalhe">
      
      <h3 className="titulo-detalhe">{dados.titulo}:</h3>

      <div className="card-descricao-principal">
        <p>{dados.descricao}</p>
      </div>

      <div className="secao-aplicacoes">
        <div className="texto-aplicacoes">
          <h4>Aplicações:</h4>
          <p>{dados.aplicacoes}</p>
        </div>
        <div className="ilustracao-aplicacoes">
          <img src={dados.ilustracao} alt={`Ilustração para ${dados.titulo}`} />
        </div>
      </div>
      
    </div>
  );
};

export default ConteudoMecanismo;