import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [Tipo_Movimiento, setTipo_Movimiento] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Cantidad, setCantidad] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            Tipo_Movimiento={Tipo_Movimiento}
            setTipo_Movimiento={setTipo_Movimiento}
            Nombre={Nombre}
            setNombre={setNombre}
            Cantidad={Cantidad}
            setCantidad={setCantidad}
            todos={todos}
            setTodos={setTodos}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
