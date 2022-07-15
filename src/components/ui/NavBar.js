import React from 'react';

// import '../Styles/nav.css'

function Nav (){
    
    return(
        <header>
            <nav>
            <div class="nav-bar">
            
                <div class="anav">
                    <a href="/">Inicio</a>
                    <a href="/">Productos</a>
                    <a href="/">Planes</a>
                    <a href="/">¿Quienes somos?</a>
                    <button className='logout-button'>Cerrar sesión</button>
                    
                    
                </div>
            </div>
        </nav>
    </header> 
    );
}
export default Nav;