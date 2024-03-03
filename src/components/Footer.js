import React from "react";

const MyFooter = () => (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} className='text-center text-lg-start text-muted'>
      <section className='border-bottom'>
        <div className='container text-center text-md-start mt-5'>
        &nbsp;
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Blockchain
              </h6>
              <p>
              Accede a mis repositorios si te apasiona el mundo Blockchain
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Cursos</h6>
              <p>
                <a href='https://github.com/SamuelZambrana/Solidity' className='text-reset'>
                  Solidity
                </a>
              </p>
              <p>
                <a href='-' className='text-reset'>
                  Hardhat
                </a>
              </p>
              <p>
                <a href='https://github.com/SamuelZambrana/Javascript' className='text-reset'>
                  Javascript
                </a>
              </p>
              <p>
                <a href='-' className='text-reset'>
                  Nodejs
                </a>
              </p>
            </div>
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <i className='fas fa-envelope me-3'></i>
                samu-1994@hotmail.es
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4 bg-dark text-white' >
        © 2024 Copyright: 
        <a className='text-reset fw-bold text-white' href='https://github.com/SamuelZambrana'>
         https://github.com/SamuelZambrana
        </a>
      </div>
    </footer>
);

export default MyFooter;