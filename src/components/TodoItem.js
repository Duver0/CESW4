import React from "react";
import { FaCheckCircle, FaEdit, FaTrashAlt } from "react-icons/fa";
import TodoList from "./TodoList";

const TodoItem = ({
  todo,
  handleDelete,
  setEdit,
}) => {
  return (    
    <li className="list-item">
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
        onChange={(e) => e.preventDefault}
      />
      <input
        type="text"
        value={todo.Cantidad}
        className={`list ${todo.Tipo_Movimiento} Cantidad`}
        onChange={(e) => e.preventDefault}
      />      
    </li>
  );
};

export default TodoItem;
