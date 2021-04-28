import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListaDeUsuarios.css'

export default function ListaDeUsuarios(){
  // usuario é a variável que vai guardar os dados
  // setUsuario configura o valor da variavel
  const [usuario, setUsuario] = useState([]);
  
  // Faz a busca na API e joga o resultado dentro de usuario
  // A busca só é feita quando a página é carregada
  useEffect(() => {
    axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce').then(
      response => setUsuario(response.data)
    )
  }, []);

  // Retorna os componentes

  // Agora vc tem todos os dados dentro da constante usuarios que a gente criou
  // É só tratar os dados
  // Lembrando que toda imagem tem que ter alt kkkk
  /*
    Estrutura da variável usuario...
    - Cada índice representa um usuario. Exemplo: usuario[0], usuario[1]...
    - Dentro de cada índice vc tem algumas informações
      usuario[0].name -> nome da pessoa
      usuario[0].img -> Link da imagem
      usuario[0].username -> nome de usuário
      usuario[0].id -> id do usuario
  */
  // Esse que eu fiz é só um exemplo... Vc pode fazer com tabela, com div.. Vc escolhe
  // Lembrando que o 'usu' não pode se chamar 'usuario' pq essa variável já existe
  // Se não ele dá erro
  // Nesse caso o return é implicito.. Não precisa escrever
  return (
    <div className="todos">
        {usuario.map(
          usu => (
            <div className="user">
               
                  <div className="source"><img src={usu.img} className="logo"/></div>
                  Nome do Usuario: {usu.name}<br></br>
                  Id: {usu.id} -
                  Username: {usu.username}
                <button className="pagar">Pagar</button>
            </div>
          )
        )}
    </div>
    
  );

  
}
