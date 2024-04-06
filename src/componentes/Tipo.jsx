
import { Link } from 'react-router-dom';
import './Genero.css'

import { useEffect, useState } from 'react';


function Tipo() {

  const [tipoConsulta, setTipoConsulta] = useState([])

  const fetchTipos = async () => {


    try {

      const response = await fetch('http://localhost:3000/tipo')
      const data = await response.json()


      setTipoConsulta(data)



    } catch (error) {
      console.log(error);

    }


  }

  useEffect(() => {
    fetchTipos()
  }, [])

  return (
    <>
      <Link to={'/tipoNew'}><button className='button-crear'>Ingresar nuevo tipo</button></Link>

      <section className='contendedor-peliculas'>

        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE DEL TIPO</th>              
              <th>DESCRIPCION</th>
              <th>EDITAR</th>
            </tr>
          </thead>
          <tbody>
          {tipoConsulta.map(tipo => <tr key={tipo._id}>
          <td>{tipo._id}</td>
          <td>{tipo.nombre}</td>          
          <td>{tipo.descripcion}</td>
          <td><Link to={'/tipoEdit/'+ tipo._id}> <button>Editar</button> </Link> </td>          
        </tr>)}

          </tbody>
        </table>       

      </section>

    </>
  )
}

export default Tipo




