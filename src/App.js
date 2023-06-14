import { useEffect, useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [posicion, setPosicion] = useState(0);
 
  const otro = () => {
    const url = 'https://reqres.in/api/users?page=2';
    let peticion = fetch(url);
    peticion
   .then(datos => datos.json())
   .then((lectura) => {
    setNombre(lectura.data[posicion].first_name);
    setPosicion(posicion + 1)
  })
   .catch(() => console.log("Ocurrio un error"));
  }

 useEffect(() => {
  
 }, []) 
 
  return (
    <>
      <h1>Premiados del mes: </h1>
      {nombre}
      <button onClick={otro}>Otro nombre</button>
    </>
  );
}

export default App;
