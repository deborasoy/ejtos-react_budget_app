
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext); /*obtengo de appContext, variables globales */
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (e) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0); /* necesito la suma de todos los costos que es el spent*/
        const inputValue = e.target.value
        if(inputValue > 20000 || inputValue < totalExpenses  ){ 
            /*Validaciones requeridas: presupuesto no exceda 20,000, no sea inferior al spent, y se pueda aumentar o reducir de 10 el input */
            alert("Verify the amount, it should not be more than 20,000 or less than the expense")
            setNewBudget(budget) /*deja en el ultimo valor aprobado que es actualmente el presupuesto */
            return
        } 
        setNewBudget(inputValue) /*modifica el presupuesto en la interfaz */
        dispatch({ /*modifica el presupuesto en la variable de appContext y almacena ese dato */
            type: 'SET_BUDGET',
            payload: inputValue,
        });
    };
    return ( /*templeate para mostrar en la interfaz, step=10 permite aumentar o reducir de a 10 en el input*/
      <div className='alert alert-dark text-center'>
         <span style={{ fontSize:"20px"}}>Budget: {currency}  {newBudget}</span>
         <div className="input-group">
           <label className="input-group-text" id="basic-addon1">{ currency }</label>
           <input className='bg bg-light border' type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
         </div>
      </div>
  );
};
export default Budget;