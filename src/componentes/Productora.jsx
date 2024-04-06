
import { Link } from 'react-router-dom';
import './Genero.css'
// import peliculas from '../../public/peliculas.json'
import { useEffect, useState } from 'react';


function Productora() {

  const [productoraConsulta, setProductoraConsulta] = useState([])

  const fetchProductoras = async () => {


    try {

      const response = await fetch('http://localhost:3000/productora')
      const data = await response.json()


      setProductoraConsulta(data)



    } catch (error) {
      console.log(error);

    }


  }

  useEffect(() => {
    fetchProductoras()
  }, [])

  return (
    <>
      <Link to={'/productoraNew'}><button className='button-crear'>Ingresar nueva productora</button></Link>

      <section className='contendedor-peliculas'>

        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE DE LA PRODUCTORA</th>
              <th>ESTADO</th>
              <th>DESCRIPCION</th>
              <th>SLOGAN</th>
              <th>EDITAR</th>
            </tr>
          </thead>
          <tbody>
          {productoraConsulta.map(productora => <tr key={productora._id}>
          <td>{productora._id}</td>
          <td>{productora.nombre}</td>
          <td>{productora.estado}</td>
          <td>{productora.descripcion}</td>
          <td>{productora.slogan}</td>
          <td><Link to={'/productoraEdit/'+ productora._id}><button>Editar</button> </Link> </td>          
        </tr>)}

          </tbody>
        </table>       

      </section>

    </>
  )
}

export default Productora




