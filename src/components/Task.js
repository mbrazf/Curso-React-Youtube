//  Aqui importamos o react
import React from "react";

//  Aqui importamos o css
import "./Task.css";

//  Aqui criamos um component para as tarefas
//  Passamos a prop task como parâmetro do component
//  e dentro do return na div, adicionamos uma classe para estilizar com css e passamos a prop task.title que irá exibir o título das tarefas.
const Task = ({ task }) => {
  return <div className="task-container">{task.title}</div>;
};

//  Exportamos o component
export default Task;
