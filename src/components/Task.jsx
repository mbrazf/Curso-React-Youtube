//  Aqui importamos o react
import React from "react";

//  Aqui importamos os icones da biblioteca instalada
import { CgClose, CgInfo } from "react-icons/cg";

import { useNavigate } from 'react-router-dom';


//  Aqui importamos o css
import "./Task.css";

//  Aqui criamos um component para as tarefas
//  Recebemos a prop task como parâmetro do component e a função handleTaskClick e a função handleTaskDeletion que remove a tarefa

//  E dentro do return na div, adicionamos uma classe para estilizar com css e iremos exibir um estilo css caso a tarefa esteja com o status completed true e adicionamos uma div com o evento onClick que executa a função ao clicar, e adicionamos  a prop task.title que irá exibir o título das tarefas.

//  Abaixo criamos outra div que irá conter os icones de remoção que ao clicar irá remover a tarefa ou exibir as informações da tarefa.
const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

  //  Aqui utilizamos o hook useNavigate utilizado para redirecionar entre as páginas
  const navigate = useNavigate()

  //  Aqui criamos uma função para redirecionar ao clicar
  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`)
  }

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
        <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

//  Exportamos o component
export default Task;
