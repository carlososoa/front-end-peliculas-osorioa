
import { Link } from 'react-router-dom';
import './Genero.css'
import { useEffect, useState } from 'react';


function Director() {

  const [directorConsulta, setDirectorConsulta] = useState([])

  const fetchDirectores = async () => {


    try {

      const response = await fetch('http://localhost:3000/director')
      const data = await response.json()


      setDirectorConsulta(data)



    } catch (error) {
      console.log(error);

    }


  }

  useEffect(() => {
    fetchDirectores()
  }, [])

  return (
    <>
      <Link to={'/directorNew'}><button className='button-crear'>Ingresar nuevo director</button></Link>

      <section className='contendedor-peliculas'>

        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE DEL DIRECTOR</th>
              <th>ESTADO</th>              
              <th>EDITAR</th>
            </tr>
          </thead>
          <tbody>
          {directorConsulta.map(director => <tr key={director._id}>
          <td>{director._id}</td>
          <td>{director.nombre}</td>
          <td>{director.estado}</td>          
          <td><Link to={'/directorEdit/'+ director._id}><button>Editar</button> </Link> </td>          
        </tr>)}

          </tbody>
        </table>       

      </section>

    </>
  )
}

export default Director




