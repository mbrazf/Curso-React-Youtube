//  Aqui importamos o React e o useState para poder utilizar os states/estados e o useEffect
import React, { useState, useEffect } from "react";

//  Aqui importamos o axios instalado, o axios é uma ferramenta para realizar requisições de API
import axios from 'axios'

//  Importamos a biblioteca instalada que gera id aleatórios para usá-lá basta passar ela assim uuidv4()
import { v4 as uuidv4 } from "uuid";

// Aqui importamos os recursos do react-router-dom
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//  Aqui importamos os components
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

// Aqui importamos o css
import "./App.css";

//  Aqui criamos um component
const App = () => {
  //  Aqui criamos um state, state é como uma variável que armazena os valores,mas quando o state é alterado o component é renderizado novamente, recebe três parâmetros, o primeiro parâmetro é o nome do state, o segundo a função que altera o state e o terceiro parâmetro é o valor inicial do state entre parênteses, nesse caso um array com as tarefas do nosso projeto.
  const [tasks, setTasks] = useState([ ]);

  //  Aqui utilizamos o hook useEffect que executa o bloco de código sempre que uma variavel é alterada, passamos a variavel que irá ser monitorada, podemos também não passar nada para ser executado assim que o component for montado a primeira vez. 
  //  E aqui consumimos a API utilizando o axios
  //  Como o useEffect não é assíncrono para podermos utilizá-lo temos que criar uma função assincrona que retorna o await com a requisição e chamar ela logo após
  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');

      //  E aqui setamos as tarefas com os dados da API
      setTasks(data);
    };

    //  Aqui chamamos a função assincrona que faz a requisição da API
    fetchTasks();
  }, [ ])

  //  Aqui criamos uma função para alterar  se a tarefa está completa ou não
  //  Utilizamos o map para percorrer todas as tarefas e verificar se o id é igual ao id do parãmetro, se for altera o status completed para true e se não retorna a tarefa
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  };

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

  //  Aqui criamos a função para remover as tarefas
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  //  Os elementos ficam dentro do return em um container ou um fragment que é basicamente um container <>  </>, e para exibir um component basta adicioná-lo assim <NomeComponent/>.
  //  Passamos para o component AddTask a chamada da função que adiciona as tarefas como uma prop
  //  Para passar as props para outro component basta passar o nome do state ou função e ele mesmo como parâmetro assim tasks={tasks}, então estamos passando o objeto do state para o component Tasks.
  //  E também passamos a função que altera o status completed da tarefa como prop

  // Também adicionamos o Router para configurar as rotas ele envolve todos os itens do return e dentro do Router fica o Routes que são as rotas e dentro do Route fica a configuração da Rota
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }/>
            <Route path="/:taskTitle" exact element={
              <TaskDetails/>
            }/>
        </Routes>
      </div>
    </Router>
  );
};

//  Aqui exportamos o component criado
export default App;
