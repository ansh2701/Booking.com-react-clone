
//rrd import
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'

//layout
import Layout from './Layout'

//Pages
import Home from './Pages/Home'
import Hotels from './Pages/Hotels'
import Hotel from './Pages/Hotel'
import { heroAction } from './Components/Hero'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="hotels" element={<Hotels />} action={heroAction}/>
      <Route path="hotels/:id" element={<Hotel />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
