import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Noticias = () => {

  const url ="http://localhost:3000/Noticias"

  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    async function fetchData(){
        const res = await fetch(url)

        const data = await res.json()
        setNoticias(data)
    }
    fetchData()
  },[])

  return (
    <div>
      <h1>Noticias</h1>
      <ul>
        {noticias.map((noticia) => (
          <li key={noticia.id}>
            <Link to={`/conteudo-noticia/${noticia.id}`}>{noticia.titulo}</Link><br/>
            {noticia.subtitulo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Noticias