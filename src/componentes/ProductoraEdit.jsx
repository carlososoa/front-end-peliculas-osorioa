
import {  useParams , useNavigate } from 'react-router-dom';
import './PeliculaEditar.css'

import { useEffect } from 'react';
import { useForm } from "react-hook-form"



function ProductoraEdit() {

  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchProductora = async () => {

    try {

      const response = await fetch(`http://localhost:3000/productora/${id}`)
      const data = await response.json()      
      setValue('nombre', data.nombre)
      setValue('estado', data.estado)
      setValue('descripcion', data.descripcion)
      setValue('slogan', data.slogan)
      

    } catch (error) {
      console.log(error);
    }

  } 


  useEffect(() => {
    fetchProductora()
  }, [])


  const onSubmit = handleSubmit((data) => {
    console.log(data);

    const enviarDatos = async () => {
      const respuesta = await fetch(`http://localhost:3000/productora/${id}`, {
        method: "PUT",
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json",
        },

      })

      if (respuesta.status == 200) {
        alert('Productora actualizada Correctamente')
        navigate("/productoras")

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
        <h1>Editar Informacion de Productora</h1>

        <form onSubmit={onSubmit}>
          <p>
            <label htmlFor="nombre">Nombre de la productora </label>
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
          <p>
            <label htmlFor="slogan">Slogan </label>
            <input type="text" {...register("slogan", { required: true })} id="slogan" />
          </p>
          <button type='submit'>Guardar</button>


        </form>

      </section>

    </>
  )
}

export default ProductoraEdit