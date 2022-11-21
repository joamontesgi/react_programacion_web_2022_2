import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function VideoJuegos() {

    const endPoint ="http://127.0.0.1:8000/api/videojuegos"
        const [nombre, setNombre] = React.useState('')
        const [descripcion, setDescripcion] = React.useState('')
        const [fecha_lanzamiento, setFecha_lanzamiento] = React.useState('')
        const [genero, setgenero] = React.useState('')
        const [plataforma, setPlataforma] = React.useState('')
        const navigate =  useNavigate()
        const almacenar = async(event) => {
            event.preventDefault()
            await axios.post(endPoint, { nombre, descripcion, fecha_lanzamiento, genero, plataforma })
            navigate('/app')        
}
  return (
    <div className='container text-center'>
        <h1>Guardar Videojuego</h1>
        <form onSubmit={almacenar}>
        <div className="form-group">
            <label htmlFor="nombre">Nombre del videojuego:</label>
            <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="descripcion">Descripcion</label>
            <input type="text" className="form-control" id="descripcion" name='descripcion' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="fecha">Fecha lanzamiento</label>
            <input type="date" className="form-control" id="fecha" name='fecha_lanzamiento' value={fecha_lanzamiento} onChange={(e) => setFecha_lanzamiento(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="genero">Genero</label>
            <input type="text" className="form-control" id="genero" name='genero' value={genero} onChange={(e) => setgenero(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="plataforma">Plataforma</label>
            <input type="text" className="form-control" id="plataforma" name='plataforma' value={plataforma} onChange={(e) => setPlataforma(e.target.value)}/>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    </div>
  )
}
