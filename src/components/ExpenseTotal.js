
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    /*calucla el gasto total o el total de presupuesto invertido, sumando los cotos o presupuestos asignados por departamento */
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (/*templeate con el letrero de spent, el total de presupuesto ya invertido en los departamentos */
        < div className='alert alert-dark text-center'>
             <span style={{ fontSize:"20px"}}>Spent so far: {currency} {totalExpenses}</span>
         </div>    
    );
};
export default ExpenseTotal