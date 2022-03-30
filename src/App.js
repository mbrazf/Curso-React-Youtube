//  Aqui importamos o React e o useState para poder utilizar os states/estados
import React, { useState } from 'react';

import Tasks from './components/Tasks'



// Aqui importamos o css
import './App.css'


//  Aqui criamos um component
const App = () => {
//  Aqui criamos um state, state é como uma variável que armazena os valores,mas quando o state é alterado o component é renderizado novamente, recebe três parâmetros, o primeiro parâmetro é o nome do state, o segundo a função que altera o state e o terceiro parâmetro é o valor inicial do state entre parênteses, nesse caso um array com as tarefas do nosso projeto.
const [tasks, setTasks] = useState([
    {
      id: '1',
      title: '- Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: '- Ler Livros',
      completed: true,
    },
    {
      id: '3',
      title: '- Jogar Video Game',
      completed: true,
    },

]);



//  Os elementos ficam dentro do return em um container ou um fragment que é basicamente um container <>  </>, e para exibir um component basta adicioná-lo assim <NomeComponent/> no exemplo é <Tasks/>.
//  Para passar as props para outro component basta passar o nome do state e ele mesmo como parâmetro assim tasks={tasks}, então estamos passando o objeto do state para um component filho.
  return  (
      <>
        <div className="container">
          <Tasks tasks={tasks}/>
        </div>
      
      </>
  );
}

//  Aqui exportamos o component criado
export default App;