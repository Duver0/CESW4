import { useEffect } from "react";
import { v4 as uuid4 } from "uuid";

function Form({
  Tipo_Movimiento,
  Nombre,
  Cantidad,
  setTipo_Movimiento,
  setNombre,
  setCantidad,
  todos,
  setTodos,
  edit,
  setEdit,
  saldo,
}) {
  const handleInputChange = ({ target }) => {
    setTipo_Movimiento(target.value);
  };

  const handleInputChange2 = ({ target }) => {
    setNombre(target.value);
  };

  const handleInputChange3 = ({ target }) => {
    setCantidad(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      updateTodo(edit.id, Tipo_Movimiento, Nombre, Cantidad);
      saldoFinal(Cantidad, Tipo_Movimiento);
      alert("Se ha actualizado correctamente");
    } else {
      const newtodo = {
        id: uuid4(),
        Tipo_Movimiento: Tipo_Movimiento,
        Nombre,
        Cantidad,
        completed: false,
      };
      setTodos([...todos, newtodo]);
      setTipo_Movimiento("");
      setNombre("");
      setCantidad("");
      count("");
      saldoFinal(Cantidad, Tipo_Movimiento);
      alert("Se ha agregado correctamente");
    }
  };

  const updateTodo = (
    id,
    Tipo_Movimiento,
    Nombre,
    Cantidad,
    completed,
  ) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { id, Tipo_Movimiento, Nombre, Cantidad, completed }
        : todo
    );    
    setTodos(newTodos);
    setEdit(null);
  };

  useEffect(() => {
    localStorage.setItem("Count", 0);
    if (edit) {
      setTipo_Movimiento(edit.Tipo_Movimiento);
      setNombre(edit.Nombre);
      setCantidad(edit.Cantidad);
    } else {
      setTipo_Movimiento("");
      setNombre("");
      setCantidad("");
    }
  }, [edit, setTipo_Movimiento, setNombre, setCantidad]);

  function getCount() {
    let count = localStorage.getItem("Count");
    document.getElementById("Count").innerHTML = count;
  }

  function count() {
    let count = localStorage.getItem("Count");
    count++;
    localStorage.setItem("Count", count);
    getCount();
  }

  window.onload=function saldo() {
    while (true) {
      var saldoInicial = prompt("Ingrese el Saldo Inicial");
      if (!isNaN(saldoInicial) && saldoInicial != null && saldoInicial != "") {
      break;
      } else {
        alert("Solo Puede Insertar Numeros");
        continue;
      }
    }
    localStorage.setItem("saldoFinal", saldoInicial);

    document.getElementById("saldoInicial").innerHTML = saldoInicial;
    document.getElementById("saldoFinal").innerHTML = saldoInicial;
  }

  function saldoFinal(Cantidad, Tipo) {
    let saldoFinal = parseInt(Cantidad);
    let saldo = parseInt(localStorage.getItem("saldoFinal"));
    if (Tipo === "Gasto") {
      if (saldo < saldoFinal) {
        alert("El Gasto es Superior al Restante");

        return;
      } else saldo = saldo - saldoFinal;
    } else {
      saldo = saldo + saldoFinal;
    }
    localStorage.setItem("saldoFinal", saldo);
    let saldoActualizado = localStorage.getItem("saldoFinal");
    document.getElementById("saldoFinal").innerHTML = saldoActualizado;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="form">
        <div class="row text-center">
          <div class="col-lg-5 col-form-label">
            <label>Tipo Movimiento:</label>
          </div>
          <div class="col-lg-7">
            <select
              value={Tipo_Movimiento}
              className="Tipo_Movimiento"
              onChange={handleInputChange}
              required
            >
              <option className="Tipo_Movimiento" value="">
                Seleccione una opcion
              </option>
              <option className="Tipo_Movimiento" value="Ingreso">
                Ingreso
              </option>
              <option className="Tipo_Movimiento" value="Gasto">
                Gasto
              </option>
            </select>
          </div>
        </div>
        <br />
        <div class="row text-center">
          <div class="col-lg-5 col-form-label ">
            <label>Nombre:</label>
          </div>
          <div class="col-lg-7">
            <input
              type="text"
              placeholder="Ingresa el nombre"
              className="task-input"
              value={Nombre}
              onChange={handleInputChange2}
              required
            />
          </div>
        </div>
        <br />
        <div class="row text-center">
          <div class="col-lg-5 col-form-label">
            <label>Cantidad: </label>
          </div>
          <div class="col-lg-7">
            <input
              type="number"
              placeholder="Ingresa la cantidad"
              className="task-input"
              value={Cantidad}
              onChange={handleInputChange3}
              required
            />
          </div>
        </div>
        <br />
        <div class="row text-center ">
          <div class="col-lg-5">
            <button className="button-cancelar" type="reset">
              {" "}
              Cancelar
            </button>
          </div>
          <div class="col-lg-7">
            <button className="button-add" type="submit" id="write">
              Agregar Movimiento
            </button>
          </div>
        </div>
        <br />
        <div class="row mx-auto">
          <div class="col-lg-3 form-check ">
            <input
              class="form-check-input"
              type="radio"
              name="filtro"
              id="ingreso"
              value="option2"
            />
            <label class="form-check-label" for="ingreso">
              Ingresos
            </label>
          </div>
          <div class="col-lg-3 form-check">
            <input
              class="form-check-input"
              type="radio"
              name="filtro"
              id="gasto"
              value="option3"
            />
            <label class="form-check-label" for="gasto">
              Gastos
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
