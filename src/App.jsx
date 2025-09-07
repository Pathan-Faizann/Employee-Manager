
import Navbar from "./components/Navbar";
import Form from "./components/Form"
import Home from "./components/Home";
import {createHashRouter,RouterProvider} from "react-router-dom"
function App() {

  const router = createHashRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/form",
      element:<><Navbar/><Form/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
  
      
    </>
  )
}

export default App
