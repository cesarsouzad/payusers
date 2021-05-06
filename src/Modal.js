import React, { useEffect, useState } from 'react';
import ListaDeUsuarios from './ListaDeUsuarios.js'
import axios from 'axios';
import CurrencyInput from 'react-currency-masked-input';

   export const Modal = ({showModal, setshowModal}) => {
    
     const [viewUser, setviewUser] = useState([])
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
      axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce').then(
        response => setviewUser(response.data)
      )
    }, []);

     return <>{showModal ? 
      <div className="modal">
       <div className="headermodal">
        <h3>Pagamento para <span style={{color: "yellow"}}>NOME DO USUARIO</span></h3>
      </div>
      <div className="input">
        <CurrencyInput name="myInput" required />
      </div>
      <div className="select">
        <select>
          <option>Cartão com final 1234</option>
          <option>Cartão com final 1111</option>
        </select>
      </div>
      <div>
        <button className="pagarmodal">Pagar</button>
      </div>
    </div>: null}</>;
                          

  };
  