//  Aqui importamos o react
import React from "react";

//  Aqui importamos o component Task
import Task from "./Task";

//  Aqui criamos um component para as tarefas
//  Para utilizar props passadas do outro component utilizamos as props como parâmetro do component que no caso se chama tasks e handleTaskClick que é a função passada como prop por outro component.
//  Aqui utilzamos um método map em tasks, para renderizar o component para cada elemento do array de tarefas.
//  E também utilizamos as props task , handleTaskClick e handleTaskDeletion

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};

//  Exportamos o component
export default Tasks;
