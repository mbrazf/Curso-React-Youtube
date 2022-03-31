//  Aqui importamos o react
import React from "react";

//  Aqui importamos o css
import "./Task.css";

//  Aqui criamos um component para as tarefas
//  Recebemos a prop task como parâmetro do component e a função handleTaskClick
//  e dentro do return na div, adicionamos uma classe para estilizar com css e iremos exibir um estilo css caso a tarefa esteja com o status completed true e adicionamos uma div com o evento onClick que executa a função ao clicar, e adicionamos  a prop task.title que irá exibir o título das tarefas.
const Task = ({ task, handleTaskClick }) => {
  return (
    <div className="task-container" style={task.completed ? {borderLeft: '6px solid chartreuse'} : {} }>
      <div className="task-title" onClick={() => handleTaskClick(task.id) }>
        {task.title}
      </div>
    </div>
  )
  // return <div className="task-container">{task.title}</div>;
};

//  Exportamos o component
export default Task;
