
import {  useParams , useNavigate } from 'react-router-dom';
import './PeliculaEditar.css'

import { useEffect } from 'react';
import { useForm } from "react-hook-form"



function GeneroEdit() {

  const url_api = 'https://api-peliculas-osorioa.onrender.com'

  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchGenero = async () => {

    try {

      const response = await fetch(`${url_api}/genero/${id}`)
      const data = await response.json()      
      setValue('nombre', data.nombre)
      setValue('estado', data.estado)
      setValue('descripcion', data.descripcion)
      

    } catch (error) {
      console.log(error);
    }

  } 


  useEffect(() => {
    fetchGenero()
  }, [])


  const onSubmit = handleSubmit((data) => {
    console.log(data);

    const enviarDatos = async () => {
      const respuesta = await fetch(`${url_api}/genero/${id}`, {
        method: "PUT",
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json",
        },

      })

      if (respuesta.status == 200) {
        alert('Genero actualizado Correctamente')
        navigate("/generos")

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
        <h1>Editar Informacion de Genero</h1>

        <form onSubmit={onSubmit}>
          <p>
            <label htmlFor="nombre">Nombre del genero </label>
            <input type="text" {...register("nombre", { required: true })} id="nombre" />
          </p>
          <p>
            <label htmlFor="estado">Selecciona el estado:</label>
            <select id="estado" {...register("estado", { required: true })}  >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </p>
          <p>
            <label htmlFor="descripcion">Descripción </label>
            <input type="text" {...register("descripcion", { required: true })} id="descripcion" />
          </p>
          <button type='submit'>Guardar</button>


        </form>

      </section>

    </>
  )
}

export default GeneroEdit