//  Aqui importamos o React e o useState para poder utilizar os states/estados
import React, { useState } from "react";

//  Importamos a biblioteca instalada que gera id aleatórios para usá-lá basta passar ela assim uuidv4()
import {v4 as uuidv4} from 'uuid'

//  Aqui importamos os components
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// Aqui importamos o css
import "./App.css";

//  Aqui criamos um component
const App = () => {
  //  Aqui criamos um state, state é como uma variável que armazena os valores,mas quando o state é alterado o component é renderizado novamente, recebe três parâmetros, o primeiro parâmetro é o nome do state, o segundo a função que altera o state e o terceiro parâmetro é o valor inicial do state entre parênteses, nesse caso um array com as tarefas do nosso projeto.
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
    
  ]);

  // console.log(tasks)

  //  Aqui criamos uma função para alterar  se a tarefa está completa ou não
  //  Utilizamos o map para percorrer todas as tarefas e verificar se o id é igual ao id do parãmetro, se for altera o status completed para true e se não retorna a tarefa
  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
        if(task.id === taskId) return { ...task, completed: !task.completed
        }
        return task
      }) 

      setTasks(newTasks)
  }


  //  Aqui criamos a função que adiciona novas tarefas
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
      
    ];

    //  E aqui chamamos o função que altera o state das tarefas e passamos newTasks como parâmetro
    setTasks(newTasks);
  };

  //  Os elementos ficam dentro do return em um container ou um fragment que é basicamente um container <>  </>, e para exibir um component basta adicioná-lo assim <NomeComponent/>.
  //  Passamos para o component AddTask a chamada da função que adiciona as tarefas como uma prop
  //  Para passar as props para outro component basta passar o nome do state ou função e ele mesmo como parâmetro assim tasks={tasks}, então estamos passando o objeto do state para o component Tasks.
  //  E também passamos a função que altera o status completed da tarefa como prop
  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </div>
    </>
  );
};

//  Aqui exportamos o component criado
export default App;
