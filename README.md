# Curso To-Do-List React Youtube

##  O que é REACT

-   Biblioteca para criar interfaces de usuário.
-   Conceito de componentes
<hr>

## Conceito de componentes

-   Construímos as nossas aplicações como se fossem peças de Lego.
-   Um componente é uma função Javascript (JSX).
-   Vantagens:
    -   Reusabilidade de código.
    -   Ótimo trabalho em equipe.
<hr>

## Criando um projeto REACT

-   Para criar um projeto REACT basta utilizar o comando no terminal:
    -   npx create-react-app (nomeDaPasta) ou utilize um ponto no lugar do nome da pasta para criar na pasta atual.    
<br>

-   E o comando para abrir o projeto no navegador para ver em tempo real utiliza o comando:
    -   npm start
<br>

-   Todos os elementos são inseridos dentro da div com o id root na index.html
<hr>

## Exemplo de um component

-   App.js
```
//  Aqui importamos o React
import React from 'react';

// Aqui importamos o css
import './App.css'

//  Aqui criamos um component
const App = () => {
  const message = 'hello world!'

  return  (
      <div>
        <div className="container">{message}</div>
        <button>Teste</button>
      </div>
  );
}

//  Aqui exportamos o component criado
export default App;
```
<hr>

## Entendendo State

-   State ou estado é como uma variável que armazena valores, mas quando o state é atualizado o component é renderizado novamente.

##  Entendendo Props

-   Props são dados que você consegue passar um de component pai para o component filho.
-   Podemos passar mais de uma props

