import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListaDeUsuarios.css'
import { Modal } from "./Modal.js";


export default function ListaDeUsuarios(){
  // usuario é a variável que vai guardar os dados
  // setUsuario configura o valor da variavel
  const [usuario, setUsuario] = useState([]);
  const [showModal, setshowModal] = useState(false)
  
  
  // Faz a busca na API e joga o resultado dentro de usuario
  // A busca só é feita quando a página é carregada
  useEffect(() => {
    axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce').then(
      response => setUsuario(response.data)
    )
  }, []);

  
  

  // Retorna os componentes

  // Lembrando que toda imagem tem que ter alt
  /*
    Estrutura da variável usuario...
    - Cada índice representa um usuario. Exemplo: usuario[0], usuario[1]...
    - Dentro de cada índice vc tem algumas informações
      usuario[0].name -> nome da pessoa
      usuario[0].img -> Link da imagem
      usuario[0].username -> nome de usuário
      usuario[0].id -> id do usuario
  */
  // Lembrando que o 'usu' não pode se chamar 'usuario' pq essa variável já existe
  // Se não ele dá erro
  // Nesse caso o return é implicito.. Não precisa escrever
  
 const openModal = ()=> { 
   setshowModal (prev => !prev);
};

  return (
    <div className="todos">
        {usuario.map(
          usu => (
            <div className="user">
               
                <div className="source"><img src={usu.img} className="logo"/></div>
                Nome do Usuario: {usu.name}<br></br>
                Id: {usu.id} -
                Username: {usu.username}
              <button className="pagar" onClick={openModal}>Pagar</button>
                
            </div>
          )
        )}
        <div className="modalph"><Modal showModal={showModal} setshowModal={setshowModal}/></div>
    </div>
    
  );  
}
