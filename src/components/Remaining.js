
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    /*calcula el total de presupuesto ya invertido en los departamento, sumando cada presupuesto asignado por departamento */
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    /*en caso del presupuesto invertido sea inferior al presupuesto del capital de la empresa, muestra el background rojo, sino gris */
    const alertType = totalExpenses >= budget ? 'alert-danger' : 'alert-dark';
    return ( /*templeate con el letrero del presupuesto restante disponible para invertir en los departamentos */
        <div className={`alert ${alertType} text-center`}>
            <span style={{ fontSize:"20px"}}>Remaining:{currency} {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;