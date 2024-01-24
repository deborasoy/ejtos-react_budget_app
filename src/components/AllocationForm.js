
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining, currency  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');
    
    const handleChangeInput=(event)=>{
        /*validacion requerida: solo acepte numeros el input "/^\d+$/" lo indica */
        const inputValue = event.target.value; 
        if(/^\d+$/.test(inputValue) || inputValue === ''){
            setCost(inputValue)
        }
    }
    const submitEvent = () => {
        /*validacion requerida: que el nuevo presupuesto asignado(cost o Allocated) a un departamento no exceda el presupuesto restante (remaining ) */
        if(cost > remaining) {
            alert("The value cannot exceed remaining funds  £ "+ remaining)
            setCost("");
            return;
        }
        /*almaceno el nuevo presupuesto asignado y el departamento a cual se le asigno al objeto en appContext */
        const expense = {
            name: name,
            cost: parseInt(cost),
        }; 
        /*verifico la accion del usuario, si desea reducir el presupuesto, guardo en el ambito global appContext el nuevo presupuesto asignado */
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            /*en caso de aumentar el presupuesto, realizo esta accion y guardo en el ambito global appContext el nuevo presupuesto */
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    return ( /*templeate del formulario para: aumentar o reducir, elegir el departamento, asignar presupuesto por departamento */
        <div className='container'>
                <div className="input-group mb-3 row">
                    <div className="input-group-prepend col p-2 " style={{ marginLeft: '2rem' }}>
                      <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                      <select className="form-select custom-select" aria-label="Default select example" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                         <option defaultValue>Choose...</option>
                         <option value="Marketing" name="marketing"> Marketing</option>
                         <option value="Sales" name="sales">Sales</option>
                         <option value="Finance" name="finance">Finance</option>
                         <option value="Human Resource" name="Human Resource">Human Resource</option>
                         <option value="IT" name="it">IT</option>
                      </select>
                   </div>
                    <div className="input-group-prepend col p-2" style={{ marginLeft: '2rem' }}>
                       <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                       <select className=" form-select custom-select " id="inputGroupSelect02" aria-label="Default select example" onChange={(event) => setAction(event.target.value)}>
                         <option defaultValue value="Add" name="Add">Add</option>
                         <option value="Reduce" name="Reduce">Reduce</option>
                      </select>
                   </div>
                   <div className="input-group mb-2 col"  style={{ marginLeft: '2rem' }}>
                     <label className="input-group-text" id="basic-addon1">{ currency }</label>
                     <input
                        required='required'
                        type='text'
                        id='cost'
                        value={cost}
                        onChange={handleChangeInput}
                        className='border border-0'>
                     </input>
                        <button className="btn btn-secondary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                         Save
                        </button>
                  </div>
              </div>
         </div>
     );
};

export default AllocationForm;
