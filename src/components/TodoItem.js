import React from "react";
import { FaCheckCircle, FaEdit, FaTrashAlt } from "react-icons/fa";
import TodoList from "./TodoList";
import Form from "./Form";

const TodoItem = ({
  todo,
  handleDelete,
  setEdit,
  framework
}) => {
  return (    
    <li className="list-item"
    value={framework ? "Ingreso": "Gasto"}>
      <div>
        <button className="button-edit" onClick={() => setEdit(todo)}>
          <FaEdit />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo)}>
          <FaTrashAlt />
        </button>
      </div>
      <input
        type="text"
        value={todo.Nombre}
        className={`list `}
        onChange={(e) => e.preventDefault, framework}
      />
      <input
        type="text"
        value={todo.Cantidad}
        className={`list ${todo.Tipo_Movimiento} Cantidad`}
        onChange={(e) => e.preventDefault, framework}        
      />      
    </li>
  );
};

export default TodoItem;
