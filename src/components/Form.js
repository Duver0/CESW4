import { useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Label, Input } from "reactstrap";

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
  setTablaBase,
  tipo,
  setTipo,
  nombreb,
  setNombreB
}) {

  const handleInputChange4 = ({ target }) => {
    setNombreB(target.value);
    filterChanges(target.value, tipo);
  };

  const handleInputChange5 = ({ target }) => {
    setTipo(target.value);
    filterChanges(nombreb, target.value);
  };

  const filterChanges = (text, radio) => {
    var result = todos.filter((elemento) => {
      if (elemento.Tipo_Movimiento
        .toString()
        .toLowerCase()
        .includes(radio.toString().toLowerCase())
      ) {
        if (elemento.Nombre
          .toString()
          .toLowerCase()
          .includes(text.toString().toLowerCase())
        ) {
          return elemento;
        }
      }
    });
    setTablaBase(result);
  };

  let count = localStorage.getItem("Count");

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
      if (edit.Tipo_Movimiento === "Gasto") {
        let saldo = parseInt(localStorage.getItem("saldoFinal"));
        localStorage.setItem("saldoFinal", parseInt(edit.Cantidad) + parseInt(saldo));
        console.log(saldo)
      } else {
        let saldo = parseInt(localStorage.getItem("saldoFinal"));
        localStorage.setItem("saldoFinal", saldo - edit.Cantidad);
      }
      saldoFinal(Cantidad, Tipo_Movimiento);
      alert("Se ha actualizado correctamente");
      counter("");
    } else {
      const newtodo = {
        id: uuid4(),
        Tipo_Movimiento: Tipo_Movimiento,
        Nombre,
        Cantidad,
        completed: false,
      };
      setTodos([...todos, newtodo]);
      setTablaBase([...todos, newtodo]);
      setTipo_Movimiento("");
      setNombre("");
      setCantidad("");
      counter("");
      saldoFinal(Cantidad, Tipo_Movimiento);
      alert("Se ha agregado correctamente");
    }
    setTipo("");
    setNombreB("");
  };

  const updateTodo = (
    id,
    Tipo_Movimiento,
    Nombre,
    Cantidad,
    completed
  ) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { id, Tipo_Movimiento, Nombre, Cantidad, completed }
        : todo
    );
    setTodos(newTodos);
    setTablaBase(newTodos);
    setEdit(null);
  };

  useEffect(() => {
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
    document.getElementById("Count").innerHTML = count;
  }

  function counter() {
    count++;
    localStorage.setItem("Count", count);
    getCount();
  }

  window.onload = function saldo() {
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
    localStorage.setItem("Count", 0);
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
    document.getElementById("saldoFinal").innerHTML = saldo;
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
              Cancelar
            </button>
          </div>
          <div class="col-lg-7">
            <button className="button-add" type="submit" id="write">
              {edit ? "Editar Movimiento" : "Agregar Movimiento"}
            </button>
          </div>
        </div>
        <br />

        <div class="row mx-auto">
          <div class="col-lg-6">
            <div class="form-inline my-2 my-lg-0">
              <input
                type="text"
                placeholder="Buscar...."
                className="task-input"
                value={nombreb}
                onChange={handleInputChange4}
              />
            </div>
          </div>
          <div class="col-lg-6 " onChange={handleInputChange5}>
            <div class="row">
              <div class="col-lg-4 form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="filtro"
                  id="todo"
                  value=""
                  checked={tipo === ""}
                />
                <label class="form-check-label" for="todo">
                  Todos
                </label>
              </div>
              <div class="col-lg-4 form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="filtro"
                  id="ingreso"
                  value="Ingreso"
                  checked={tipo === "Ingreso"}
                />
                <label class="form-check-label" for="ingreso">
                  Ingreso
                </label>
              </div>
              <div class="col-lg-4 form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="filtro"
                  id="gasto"
                  value="Gasto"
                  checked={tipo === "Gasto"}
                />
                <label class="form-check-label" for="gasto">
                  Gasto
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form >
  );
}

export default Form;
