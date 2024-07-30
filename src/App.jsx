
import { BrowserRouter, useRoutes } from "react-router-dom"
import { NavBar } from "./components/shared/NavBar"
import { Home } from "./pages/Home"
import { Cupon } from "./pages/Cupon"
import { Galeria } from "./pages/Galeria"
import { NotFound } from "./pages/notFound"

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />}, 
    {path: '/cupon', element: <Cupon />} ,
    {path: '/galeria', element: <Galeria />} ,

    { path: '/*', element: <NotFound />, },
  ])

  return routes
}

function App() {

  return (
    <BrowserRouter>
    <main className='bg-gradient-to-br from-indigo-200 to-emerald-100 h-screen w-full'>
     <NavBar />
     <AppRoutes />
    </main>
    </BrowserRouter>
  )
}

export default App
