import React, { useState } from 'react';
import './App.css';
import ConteudoMecanismo from './components/ConteudoMecanismo';
import BotaoMecanismo from './components/BotaoMecanismo';

//imagens
import ilustracaoOQueSao from './assets/ilustracao-o-que-sao.svg';
import ilustracaoImportancia from './assets/ilustracao-importancia.svg';
import iconeSenha from './assets/icone-senha.svg';
import iconeMfa from './assets/icone-mfa.svg';
import iconeAes from './assets/icone-aes.svg';
import iconeRbac from './assets/icone-rbac.svg';
import ilustracaoSenhas from './assets/ilustracao-senhas.svg';
import ilustracaoMfa from './assets/ilustracao-mfa.svg';
import ilustracaoAes from './assets/ilustracao-aes.svg';
import ilustracaoRbac from './assets/ilustracao-rbac.svg';


const dadosMecanismos = {
    senhas: {
      titulo: 'Senhas e Salting',
      descricao: 'Lorem ipsum dolor sit amet. Et ipsa omnis aut molestias recusandae vel assumenda voluptatem cum cupiditate numquam ut distinctio amet. Et distinctio remolestiae id amet corrupti. Id dolor dolor qui quae dolorum id fugiat labore. In fugit veritatis 33 necessitatibus ullam qui nihil eius eum ipsa nulla et dolorum quasi. Et recusandae voluptatum ex veniam Quis ea placet harum.',
      aplicacoes: 'Lorem ipsum dolor sit amet. Et ipsa omnis aut molestias recusandae vel assumenda voluptatem cum cupiditate numquam ut distinctio amet. Et distinctio remolestiae id amet corrupti. Id dolor dolor qui quae dolorum id fugiat labore.',
      ilustracao: ilustracaoSenhas
    },
    mfa: {
      titulo: 'Autenticação de Múltiplos Fatores',
      descricao: 'Lorem ipsum dolor sit amet. Et ipsa omnis aut molestias recusandae vel assumenda voluptatem cum cupiditate numquam ut distinctio amet. Et distinctio remolestiae id amet corrupti. Id dolor dolor qui quae dolorum id fugiat labore. In fugit veritatis 33 necessitatibus ullam qui nihil eius eum ipsa nulla et dolorum quasi. Et recusandae voluptatum ex veniam Quis ea placet harum.',
      aplicacoes: 'Lorem ipsum dolor sit amet. Et ipsa omnis aut molestias recusandae vel assumenda voluptatem cum cupiditate numquam ut distinctio amet. Et distinctio remolestiae id amet corrupti. Id dolor dolor qui quae dolorum id fugiat labore.',
      ilustracao: ilustracaoMfa       
    },
    aes: {
      titulo: 'Criptografia Simétrica (AES)',
      descricao: 'Lorem ipsum dolor sit amet. Et ipsa omnis aut molestias recusandae vel assumenda voluptatem cum cupiditate numquam ut distinctio amet. Et distinctio remolestiae id amet corrupti. Id dolor dolor qui quae dolorum id fugiat labore. In fugit veritatis 33 necessitatibus ullam qui nihil eius eum ipsa nulla et dolorum quasi. Et recusandae voluptatum ex veniam Quis ea placet harum.',
      aplicacoes: 'Lorem ipsum dolor sit amet. Et ipsa omnis aut molestias recusandae vel assumenda voluptatem cum cupiditate numquam ut distinctio amet. Et distinctio remolestiae id amet corrupti. Id dolor dolor qui quae dolorum id fugiat labore.',
      ilustracao: ilustracaoAes     
    },
    rbac: {
      titulo: 'RBAC (Role-Based Access Control)',
      descricao: 'Lorem ipsum dolor sit amet. Et ipsa omnis aut molestias recusandae vel assumenda voluptatem cum cupiditate numquam ut distinctio amet. Et distinctio remolestiae id amet corrupti. Id dolor dolor qui quae dolorum id fugiat labore. In fugit veritatis 33 necessitatibus ullam qui nihil eius eum ipsa nulla et dolorum quasi. Et recusandae voluptatum ex veniam Quis ea placet harum.',
      aplicacoes: 'Lorem ipsum dolor sit amet. Et ipsa omnis aut molestias recusandae vel assumenda voluptatem cum cupiditate numquam ut distinctio amet. Et distinctio remolestiae id amet corrupti. Id dolor dolor qui quae dolorum id fugiat labore.',
      ilustracao: ilustracaoRbac  
    }
};

function App() {
  const [mecanismoAtivo, setMecanismoAtivo] = useState(null);
  const [isDetalheVisivel, setIsDetalheVisivel] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const handleSelecionaMecanismo = (mecanismo) => {
    if (isDetalheVisivel && mecanismoAtivo === mecanismo) {
      setIsDetalheVisivel(false);
      return;
    }

    if (!isDetalheVisivel) {
      setMecanismoAtivo(mecanismo);
      setIsDetalheVisivel(true);
      setAnimationClass('fade-in');
    } 

    else {
      setAnimationClass('fade-out');

      setTimeout(() => {
        setMecanismoAtivo(mecanismo);
        setAnimationClass('fade-in');
      }, 250);
    }
  };

  return (
    <div className="container-principal">
      <header className="cabecalho">
        <h1>Arkhé</h1>
        <h2>Mecanismos de Segurança</h2>
      </header>

      <main>
        <section className="secao-descricao">
          <div className="texto-descricao">
            <h3>O que são Mecanismos de Segurança?</h3>
            <p>Lorem ipsum dolor sit amet. Et ipsa omnis aut molestias recusandae vel assumenda voluptatem cum cupiditate numquam ut distinctio amet et distinctio tempore id amet corrupti. Id dolor dolor qui quae dolorum id fugiat labore.</p>
          </div>
          <div className="ilustracao-descricao">
            <img src={ilustracaoOQueSao} alt="Ilustração de mecanismos de segurança" />
          </div>
        </section>
        
        <section className="secao-descricao ordem-inversa">
          <div className="texto-descricao">
            <h3>Importância dos Mecanismos de Segurança</h3>
            <p>Lorem ipsum dolor sit amet. Et ipsa omnis aut molestias recusandae vel assumenda voluptatem cum cupiditate numquam ut distinctio amet et distinctio tempore id amet corrupti. Id dolor dolor qui quae dolorum id fugiat labore.</p>
          </div>
          <div className="ilustracao-descricao">
            <img src={ilustracaoImportancia} alt="Ilustração da importância da segurança" />
          </div>
        </section>

        <section className="secao-mecanismos">
          <h3>Mecanismos Utilizados no Arkhé</h3>
          <div className="container-botoes">
            <BotaoMecanismo onClick={() => handleSelecionaMecanismo('senhas')} icone={iconeSenha} variant="outlined">
              Senhas e Salting
            </BotaoMecanismo>
            <BotaoMecanismo onClick={() => handleSelecionaMecanismo('mfa')} icone={iconeMfa} variant="filled">
              Autenticação de Múltiplos Fatores
            </BotaoMecanismo>
            <BotaoMecanismo onClick={() => handleSelecionaMecanismo('aes')} icone={iconeAes} variant="filled">
              Criptografia Simétrica (AES)
            </BotaoMecanismo>
            <BotaoMecanismo onClick={() => handleSelecionaMecanismo('rbac')} icone={iconeRbac} variant="outlined">
              <div><strong>RBAC</strong><br />(Role-Based Access Control)</div>
            </BotaoMecanismo>
          </div>
        </section>
        
<div className={`conteudo-detalhe-wrapper ${isDetalheVisivel ? 'open' : ''}`}>
          {mecanismoAtivo && (
            <div className={animationClass}>
              <ConteudoMecanismo dados={dadosMecanismos[mecanismoAtivo]} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}


export default App;