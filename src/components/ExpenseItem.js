/*
importa el envio desde Context(permite enviar una accion(eliminacion))
*/
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    /*resetear el valor del presupuesto asignado al departamento a 0 por su id (funcionalidad del boton "x") y modifca en ambito global */
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    /*incrementar el presupuesto de a 10 por departamento (funcionalidad del boton "+")  */
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        /*modifica en el ambito global appContext el aumento del presupuesto con el boton (+) */
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    /*reduce el presupuesto de a 10 por departamento (funcionalidad del boton "-") */
    const reduceAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        /*modifica en el ambito global appContext, reduce el  presupuesto con el boton (-) */
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return ( /*templeate con el valor del body de la tabla creada en componente ExpenseList */
        <tr>
        <td style={{ fontSize:"24px"}}>{props.name}</td>
        <td style={{ fontSize:"24px"}}>{currency}{props.cost}</td>
        <td><button className='btn btn-success' onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button className='btn btn-danger' onClick={event=> reduceAllocation(props.name)}>-</button></td>
        <td style={{ cursor:"pointer"}}><TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
