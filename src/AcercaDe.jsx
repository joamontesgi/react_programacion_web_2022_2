import React from 'react'

export default function AcercaDe() {
  return (
    <div className='container text-center'>
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link">Previo</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Siguiente</a>
        </li>
      </ul>
    </nav>
      <div className="spinner-border" role="status"></div>
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
      </div>
      <br />
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
      <br />
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
      </div>
      <br />
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
      </div>
      <br />
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{"width": "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
      </div>
    </div>
  )
}
