import React from 'react';
import Img2 from '../../../img/ermua-saski-eskola.jpeg'

const Header = () => {
  return (
    <div>
      <img src={Img2} className="header" />
      <div className="contacto">
        <h1 className="titulo-contacto">Inscripcion abierta</h1>
        <p>Aqui tienes toda la informacion que necesitas</p>
        <button type="button" className="btn btn-primary botones" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Mas informacion
        </button>
      </div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Contacto</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Para inscribirte en el club de baloncesto contáctanos al: <br />
              Email: ermuasaskibaloieskola@gmail.com <br />
              Telefono: +34 629 32 94 64 <br />
              Datos a enviar (nombre, apellido, fecha de nacimiento, email y telefono)
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
