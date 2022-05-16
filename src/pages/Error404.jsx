import React from 'react';
import { Link } from 'react-router-dom';
import pageNoFound from '../images/pageNoFound.png';
import '../styles/error404.css';

const Error404 = () => {
    return (
        <>
            <div className='autenticacion'>
                <div className='autenticacion__tittle'>
                    <h1>Usted no esta autorizado para acceder a la ruta</h1>
                </div>
                <div>
                    <figure>
                        <img src={pageNoFound} alt="" />
                    </figure>
                </div>
                <div className='autenticacion__link'>
                    <Link to="/"><p>Volver a la pagina de inicio</p></Link>
                </div>
            </div>
        </>
    )
}

export default Error404