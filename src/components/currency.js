import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('');
   const handleChangeSelect = (e)=>{
     /*obtener, modificar y almacenar la moneda en la variable global y luego modificarlo en la interfaz */
     const selectCurrency = e.target.value
     setCurrency(selectCurrency)
     dispatch({
         type: 'CHG_CURRENCY',
         payload: selectCurrency ?? currency,
     })
  }
 return (  /*templeate con la opcion de cambiar la moneda en la interfaz en cada componente */
    
     <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                   <label className="input-group-text" htmlFor="inputGroupSelect03">Currency</label>
                  <select onChange={handleChangeSelect} className=" form-select custom-select " id="inputGroupSelect03" aria-label="Default select example">
                     <option defaultValue value="£" name="£">£ Pound</option> 
                     <option value="$" name="$">$ Dollar</option>
                     <option value="€" name="€">€ Euro</option>
                     <option value="₹" name="₹">₹ Ruppee</option>
                  </select>
               </div>

 );
}
export default Currency