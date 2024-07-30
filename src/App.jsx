
import { useRoutes } from "react-router-dom"
import { NavBar } from "./components/shared/NavBar"
import { Home } from "./pages/Home"

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/',}, 
    {path: '/',} ,
    {path: '/',} 
  ])
}

function App() {

  return (
    <main className='bg-gradient-to-br from-indigo-200 to-emerald-100 h-screen w-full'>
     <NavBar />
     <Home />
    </main>
  )
}

export default App
