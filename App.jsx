import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Faculdade from './pages/Faculdade'
import Noticias from './pages/Noticias'
import Dpo from './pages/Dpo'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ConteudoNoticias from './pages/ConteudoNoticias'

function App() {

  return (
    <>
      <BrowserRouter>
      <h1>Uniesp - Centro universitário</h1>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/faculdade' element={<Faculdade/>}/>
          <Route path='/dpo-lgpd' element={<Dpo/>}/>
          <Route path='/noticias' element={<Noticias/>}/>
          <Route path='/conteudo-noticia/:id' element={<ConteudoNoticias/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
