
import { Link ,useParams} from 'react-router-dom';
import './PeliculaDetalles.css'
// import peliculas from '../../public/peliculas.json'
import { useEffect, useState } from 'react';


function PeliculaDetalle() {

  const { id } = useParams(); 

  const [peliculasC, setPeliculas] = useState([])
  const [genero, setGenero] = useState([])
  

  const fetchPeliculas = async () => {

    try {

      const response = await fetch(`http://localhost:3000/media/${id}`)
      const data = await response.json()          
      setPeliculas(data)
      setGenero(data.genero) 
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{
    fetchPeliculas()
  },[])

  return (
    <>
      <section className='peli-det-seccion'>
        <aside className='peli-det-aside'>
        <h2 className='peli-det-h2' >{peliculasC.titulo}</h2>
        <img className='peli-det-img' src= {peliculasC.imgPortada} />        
        <Link to={'/editar/'+peliculasC._id}><button>Editar</button></Link>
        <p className='peli-det-p' >Sinopsis: {peliculasC.sinopsis}</p>
        <p className='peli-det-p' >Genero: {genero.nombre}</p>
        <p className='peli-det-p' >Año de estreno: {peliculasC.anioEstreno}</p>
        

        </aside>
        
        <iframe width="560" height="315" src={peliculasC.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>

    </>
  )
}

export default PeliculaDetalle