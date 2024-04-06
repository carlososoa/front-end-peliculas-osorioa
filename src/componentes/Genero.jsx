
import { Link } from 'react-router-dom';
import './Genero.css'
// import peliculas from '../../public/peliculas.json'
import { useEffect, useState } from 'react';


function Genero() {

  const [generoConsulta, setGeneroConsulta] = useState([])

  const fetchGeneros = async () => {


    try {

      const response = await fetch('http://localhost:3000/genero')
      const data = await response.json()


      setGeneroConsulta(data)



    } catch (error) {
      console.log(error);

    }


  }

  useEffect(() => {
    fetchGeneros()
  }, [])

  return (
    <>
      <Link to={'/generoNew'}><button className='button-crear'>Ingresar nuevo genero</button></Link>

      <section className='contendedor-peliculas'>

        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE DEL GENERO</th>
              <th>ESTADO</th>
              <th>DESCRIPCION</th>
              <th>EDITAR</th>
            </tr>
          </thead>
          <tbody>
          {generoConsulta.map(genero => <tr key={genero._id}>
          <td>{genero._id}</td>
          <td>{genero.nombre}</td>
          <td>{genero.estado}</td>
          <td>{genero.descripcion}</td>
          <td><Link to={'/generoEdit/'+ genero._id}><button>Editar</button> </Link> </td>          
        </tr>)}

          </tbody>
        </table>       

      </section>

    </>
  )
}

export default Genero




