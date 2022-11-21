import React from 'react'
// import Inicio from './Inicio'


export default function Inicio() {
  return (
    <div className='container text-center'>
      <br />
      <div className="card" >
      <div className="card-body">
        <h5 className="card-title">Tarjeta de Bootstrap</h5>
        <p className="card-text">Ejemplo de una tarjeta de Bootstrap adaptada en React.</p>
      </div>
    </div>
    <br />
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}
