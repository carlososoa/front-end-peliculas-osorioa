
import {  useParams , useNavigate } from 'react-router-dom';
import './PeliculaEditar.css'
// import peliculas from '../../public/peliculas.json'
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"



function PeliculaEditar() {

  const url_api = 'https://api-peliculas-osorioa.onrender.com'

  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate();
  const { id } = useParams();

    
  const [generos, setGeneros] = useState([])
  const [directores, setDirectores] = useState([])  
  const [productoras, setProductoras] = useState([])
  const [tipos, setTipos] = useState([])





  const fetchPeliculas = async () => {

    try {

      const response = await fetch(`${url_api}/media/${id}`)
      const data = await response.json()      
      setValue('serial', data.serial)
      setValue('titulo', data.titulo)
      setValue('sinopsis', data.sinopsis)
      setValue('url', data.url)
      setValue('imgPortada', data.imgPortada)
      setValue('estado', data.estado)
      setValue('anioEstreno', data.anioEstreno)
      setValue('genero', data.genero._id)
      setValue('director', data.director._id)
      setValue('productora', data.productora._id)
      setValue('tipo', data.tipo._id)

    } catch (error) {
      console.log(error);
    }

  }

  const fetchGeneros = async () => {

    try {

      const response = await fetch(`${url_api}/genero`)
      const data = await response.json()

      setGeneros(data)
    } catch (error) {
      console.log(error);
    }

  }
  const fetchDirectores = async () => {

    try {

      const response = await fetch(`${url_api}/director`)
      const data = await response.json()

      setDirectores(data)
    } catch (error) {
      console.log(error);
    }

  }
  const fetchProductoras = async () => {

    try {

      const response = await fetch(`${url_api}/productora`)
      const data = await response.json()

      setProductoras(data)
    } catch (error) {
      console.log(error);
    }

  }
  const fetchTipos = async () => {

    try {

      const response = await fetch(`${url_api}/tipo`)
      const data = await response.json()

      setTipos(data)
    } catch (error) {
      console.log(error);
    }

  }


  useEffect(() => {
    fetchPeliculas(), fetchGeneros(), fetchDirectores(), fetchProductoras(), fetchTipos()
  }, [])


  const onSubmit = handleSubmit((data) => {
    console.log(data);

    const enviarDatos = async () => {
      const respuesta = await fetch(`${url_api}/media/${id}`, {
        method: "PUT",
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },


      })





      if (respuesta.status == 200) {
        alert('Pelicula actualizada Correctamente')
        navigate("/"+ id);

      } else if (respuesta.status == 400) {
        const respuestaTexto = await respuesta.text()
          alert(respuestaTexto)

      } else {
        const respuestaJson = await respuesta.json()
        alert(respuestaJson.mensaje[0].msg)
      }



    }

    try {
      enviarDatos()

    } catch (error) {
      console.log(error);

    }



  })



  return (
    <>
      <section className='peli-edit-section' >
        <h1>Editar Informacion de Pelicula</h1>

        <form onSubmit={onSubmit}>
          <p>
            <label htmlFor="serial">Serial </label>
            <input type="text" {...register("serial", { required: true })} id="serial" />
          </p>
          <p>
            <label htmlFor="titulo">Titulo </label>
            <input type="text" {...register("titulo", { required: true })} id="titulo" />
          </p>
          <p>
            <label htmlFor="sinopsis">Sinopsis </label>
            <input type="text" {...register("sinopsis", { required: true })} id="sinopsis" />
          </p>
          <p>
            <label htmlFor="url">Url </label>
            <input type="url" {...register("url", { required: true })} id="url" />
          </p>
          <p>
            <label htmlFor="imgPortada">Enlace Imagen de Portada </label>
            <input type="url" {...register("imgPortada", { required: true })} id="imgPortada" />
          </p>
          <p>
            <label htmlFor="estado">Selecciona el estado:</label>
            <select id="estado" {...register("estado", { required: true })}  >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </p>
          <p>
            <label htmlFor="anioEstreno">Año de Estreno </label>
            <input type="number" {...register("anioEstreno", { required: true })} id="anioEstreno" />
          </p>
          <p>
            <label htmlFor="genero">Selecciona el genero:</label>
            <select id="genero" {...register("genero", { required: true })}   >
              {generos.map(genero => <option key={genero._id} value={genero._id}>{genero.nombre}</option>)}
            </select>
          </p>
          <p>
            <label htmlFor="director">Selecciona el director:</label>
            <select id="director" {...register("director", { required: true })}   >
              {directores.map(director => <option key={director._id} value={director._id}>{director.nombre}</option>)}
            </select>
          </p>
          <p>
            <label htmlFor="productora">Selecciona la productora:</label>
            <select id="productora" {...register("productora", { required: true })}  >
              {productoras.map(productora => <option key={productora._id} value={productora._id}>{productora.nombre}</option>)}
            </select>
          </p>
          <p>
            <label htmlFor="tipo">Selecciona el tipo:</label>
            <select id="tipo" {...register("tipo", { required: true })}  >
              {tipos.map(tipo => <option key={tipo._id} value={tipo._id}>{tipo.nombre}</option>)}
            </select>
          </p>

          <button type='submit'>Guardar</button>


        </form>

      </section>

    </>
  )
}

export default PeliculaEditar