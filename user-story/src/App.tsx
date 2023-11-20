import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Recent from './pages/Recent'
import Info from './pages/Info'
import Setting from './pages/Setting'
import { dashboard, home, info, recent, setting } from './strings/string'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={dashboard} element={<Dashboard />} />
        <Route path={info} element={<Info />} />
        <Route path={recent} element={<Recent />} />
        <Route path={setting} element={<Setting />} />
      </Routes>
    </BrowserRouter>
  )
}
