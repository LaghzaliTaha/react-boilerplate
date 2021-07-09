import React from 'react'
type AppProps = {
    setPage: Function;
};
const NavBar = ({setPage}:AppProps) => (<nav><button onClick={()=> setPage('Planets')}> Planets</button><button onClick={()=> setPage('People')}>People</button></nav>);

export default NavBar;
