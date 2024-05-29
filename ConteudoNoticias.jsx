import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ConteudoNoticias = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/Noticias/${id}`

    const [conteudoNoticias, setConteudoNoticias] = useState({})
  
    useEffect(() => {
      async function fetchData(){
          const res = await fetch(url)
  
          const data = await res.json()
          setConteudoNoticias(data)
      }
      fetchData()
    },[])
  
    return (
        <>
        <h1>{conteudoNoticias.titulo}</h1>
        <h2>{conteudoNoticias.subtitulo}</h2>
        <p>{conteudoNoticias.texto}</p>
        </>
    )
}

export default ConteudoNoticias