import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrencyInput from 'react-currency-masked-input';
import { render } from '@testing-library/react';


   export const Modal = ({showModal, setshowModal, usuario}) => {
    console.log(usuario)
     const [viewUser, setviewUser] = useState([])
     const [modalResp, setmodalResp] = useState(false)
     const [modaldois, setmodaldois] = useState("none")
     let cards = [
      // valid card
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      // invalid card
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
    ];

     useEffect(() => {
      axios.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989').then(
        response => {setviewUser(response.data);
          
        }
      )
    }, []);
    console.log(modaldois)

    
    const resultado = (e) =>{
      e.preventDefault();
     //console.log(viewUser.status)
     setmodaldois("block")
    }

     return <>{showModal ? 
      <div>
      <form className="modal" onSubmit={resultado}>
       <div className="headermodal">
        <h3>Pagamento para <span style={{color: "yellow"}}>{usuario.name}</span></h3>
      </div>
      <div className="input">
        <CurrencyInput name="myInput" required />
      </div>
      <div className="select">
        <select>
        {cards.map(
          cartao => (
          <option>Cartão com final {cartao.card_number.substr(-4)}</option>
         ))}
        </select>
      </div>
      <div>
        <button className="pagarmodal">Pagar</button>
      </div>
      <div className="resultado" style={{display:modaldois}}>
        Transação {viewUser.status} com sucesso!
      </div>
      </form>
    </div>: null}</>;
                          

  };
  