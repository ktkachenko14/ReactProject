import React from 'react';
import './Navbar.css';

function Navbar(){
    let obj = {
        'float':'right',
        'padding-right':'10px',
        'padding-top':'5px'
    };
    return(
        <navbar>
            <ul>
                <li><a>Products</a></li>
                <li><a>Categories</a></li>
                <li><a>Users</a></li>
                <li><a>Login</a></li>
                <li style={obj}><img src="https://img.icons8.com/cotton/42/000000/logout-rounded.png"/></li>
            </ul>
           
        </navbar>
       
    );
}


export default Navbar;