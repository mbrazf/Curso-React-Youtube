import React from 'react';

//  Importamos os Hooks que serão utilizados
import { useParams, useNavigate } from 'react-router-dom'

//  Importamos o component button
import Button from './Button'

//  Importamos o css
import "./TaskDetails.css"

//  Criamos o component que exibe os detalhes das tarefas
const TaskDetails = () => {
    //  Aqui utilizamos um hook
    //  Um hook é basicamente uma função que retorna alguma coisa, o useParams retorna os parametros usados na nossa URL. No caso irá retornar o nome da tarefa
    const params = useParams();

    //  E aqui utilizamos o hook para redirecionar entre as páginas
    const navigate = useNavigate()

    //  E aqui criamos uma função para retornar para a home ao clicar em voltar
    const handleBackButtonClick = () => {
        navigate("/")
    }

    //  Utilizamos o mesmo component Button criado anteriormente
    //  adicionamos um evento onClick no Button que chama a função para retornar para a home
    //  e passamos as informações das tarefas 
    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum doloribus quae modi dolorem, error minima.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;