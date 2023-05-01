import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/index'
import { Home } from './pages/Home'
import { Equipes } from './pages/Equipes'
import { Ajustes } from './pages/Ajustes'
import { Relatorios } from './pages/Relatorios'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/equipes' element={<Equipes />}/>
        <Route path='/ajustes' element={<Ajustes />}/>
        <Route path='/relatorios' element={<Relatorios />}/>
      </Route>
    </Routes>
  )
}
