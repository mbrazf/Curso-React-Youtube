import React, { useState } from "react";

//  Importamos o component Button
import Button from "./Button";

//  Importamos o css
import "./AddTask.css";

//  Aqui criamos o component AddTask que recebe a função handleTaskAddition como prop para adicionar tarefas  para adicionar as tarefas 
const AddTask = ({ handleTaskAddition }) => {
  //  Aqui criamos um state para o input com o state atual e a função que altera o state
  const [inputData, setInputData] = useState(" ");

  //  Aqui criamos uma função para pegar o que for digitado no input e passamos o evento onChange no input chamando essa função
  const handleInputChange = (e) => {
    //  Aqui alteramos o state inputData com o que for digitado no input 
    setInputData(e.target.value);

  };


  //    Aqui criamos a função que adiciona a tarefa ao clicar no button
  //    Passamos o state inputData com o que foi digitado no input armazenado nele para a função handleTaskAddition
  //    E passamos o valor de setInputData para vazio para limpar o campo após adicionar uma tarefa 
  const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData( " " )  
  }

  //  Aqui fica os elementos e components
  //  Adicionamos o evento onChange no input com a chamada da função que pega o que foi digitado no input e tudo que for digitado no input estará dentro do state inputData passado como value
  //  E adicionamos o component Button com o evento onClick com a chamada da função handleAddTaskClick de adicionar as tarefas ao clicar no botão
  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
