import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [Tipo_Movimiento, setTipo_Movimiento] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Cantidad, setCantidad] = useState("");
  const [tablabase, setTablaBase] = useState([]);
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [tipo, setTipo] = useState("");
  const [nombreb, setNombreB] = useState("");
  
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>{" "}
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
            nombreb={nombreb}
            setNombreB={setNombreB}
            tipo={tipo}
            setTipo={setTipo}
            tablabase={tablabase}
            setTablaBase={setTablaBase}
          />
        </div>
        <div>
          <TodoList 
            todos={tablabase}
            setTodos={setTablaBase}
            setEdit={setEdit}
            values={todos}
            setValues={setTodos}
            nombreb={nombreb}
            setNombreB={setNombreB}
            tipo={tipo}
            setTipo={setTipo}
             />
        </div>
      </div>
    </div>
  );
}

export default App;
