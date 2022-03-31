import React from 'react';

//  Importamos o css do Button
import './Button.css'

//  Aqui criamos o component button e passamos o children como parâmetro, o children é basicamente tudo que fica dentro de um component, no caso será o que tiver dentro do button, e também passamos como prop o evento onClick do button
const Button = ({ children, onClick }) => {
    return ( 
        <button onClick={onClick} className="button">
            {children}
        </button>
     );
}
 


export default Button;