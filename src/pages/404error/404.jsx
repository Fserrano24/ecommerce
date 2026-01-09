import React from "react";


const Error404 = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 page-central">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="error-wrapper text-center">
            <div className="icon-container mb-4">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/dinosaurio-negro-blanco-error-404-illustration-svg-png-download-9708259.png"
                alt="Error 404"
                className="img-fluid"
              />
            </div>

            <p className="error-code">ERROR 404</p>

            <h1 className="error-message">
              Oops... Página no encontrada!
            </h1>

            <p className="explanation-text p-2">
              Lo sentimos, la página que estás buscando no existe o fue movida.
              Verificá la URL o regresá al inicio.
            </p>

            <div className="return-home mt-4">
              <a href="/home" className="btn btn-dark">
                INICIO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
