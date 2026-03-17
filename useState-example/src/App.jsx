import { useState } from 'react'
import './App.css'
import InputText from './components/InputText'
import Boton from './components/Boton'

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    if (num1 < 0 || num2 <0) {
      alert("Ingrese solo nunmeros positivos");
      setNum1(0);
      setNum2(0);
      return;
    }
    const sumatoria = num1 + num2;
    setResultado(sumatoria);
  }

  const restar = () => {
    const restatoria = num1 - num2;
    setResultado(restatoria);
  }

  const multiplicar = () => {
    if (num1 < 0 || num2 <0) {
      alert("Ingrese solo numeros positivos");
      setNum1(0);
      setNum2(0);
      setResultado(0);
      return;
    }
    const multiplicatoria = num1 * num2;
    setResultado(multiplicatoria);
  }

  const dividir = () => {
    if (num1 == 0 || num2 == 0 || num1 < 0 || num2 <0) {
      alert("No se puede dividir entre 0 o menor");
      setNum1(0);
      setNum2(0);
      setResultado(0);
      return;
    }
    const divitorio = num1 / num2;
    setResultado(divitorio);
  }

  //Codigo para rel TODO: Administrador de tareas
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  //Crear la funciòn que guarde las tareas
  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  }

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };
  

  return (
    <>
    <h1>Ejemplo de uso del Hook UseState</h1>
  
    <h2>Suma</h2>

    <InputText
      label={"Ingrese numero 1"}
      placeholder={"Ingrese numero 1"}
      value={num1}
      onChange={(e) => setNum1(Number(e.target.value))}
      type={"number"}
      />

    <InputText
      label={"Ingrese numero 2"}
      placeholder={"Ingrese numero 2"}
      value={num2}
      onChange={(e) => setNum2(Number(e.target.value))}
      type={"number"}
      />

      <Boton  label="Sumar" onClick={sumar}/>

      <hr />

      <Boton label="Restar" onClick={restar}/>

      <hr />

      <Boton label="Multiplicar" onClick={multiplicar}/>

      <hr />

      <Boton label="Dividir" onClick={dividir}/>

      <h2>Resultado: {resultado}</h2>
      




      <h1>TODO: Administrador de tareas</h1>

      <InputText
        label="Ingrese tarea"
        placeholder="Ingrese tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        type="text"
      />
 
      <Boton label="Agregar tarea"
       onClick={agregarTarea}/>

       <hr />

      <Boton label="Eliminar tarea"
       onClick={eliminarTarea}/>

      <h2>Lista de tareas:</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
          
        ))}
      </ul>

    </>
  )
}

export default App
