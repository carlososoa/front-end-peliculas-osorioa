
import { Link } from 'react-router-dom';
import './Pelicula.css'
// import peliculas from '../../public/peliculas.json'
import { useEffect, useState } from 'react';


function Pelicula() {
  const url_api = 'https://api-peliculas-osorioa.onrender.com'

  const [peliculasC, setPeliculas] = useState([])

  const fetchPeliculas = async () => {


    try {

      const response = await fetch(`${url_api}/media`)
      const data = await response.json()
      
      
      setPeliculas(data)
      


    } catch (error) {
      console.log(error);

    }


  }

  useEffect(()=>{
    fetchPeliculas()
  },[])

  return (
    <>
    <Link to={'/nueva-pelicula'}><button className='button-crear'>Ingresar nueva pelicula</button>  </Link>
    
      <section className='contendedor-peliculas'>
        

        {peliculasC.map(pelicula => <div key={pelicula.titulo} className='div-pelicula'>
          <Link to={pelicula._id} className='enlace-pelicula'>
            <img src={pelicula.imgPortada} />
            <span>{pelicula.anioEstreno}</span>
            <p className='titulo-pelicula'>{pelicula.titulo}</p>
          </Link>
        </div>)}

      </section>

    </>
  )
}

export default Pelicula