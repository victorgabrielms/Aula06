import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home <br /></Link>
        <Link to='/faculdade'>A faculdade <br /></Link>
        <Link to='/dpo-lgpd'>Dpo-Lgpd <br/></Link>
        <Link to='/noticias'>Noticias<br/></Link>
    </nav>
  )
}

export default Navbar