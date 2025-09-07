
import Navbar from "./components/Navbar";
import Form from "./components/Form"
import Home from "./components/Home";
import {createBrowserRouter,RouterProvider} from "react-router"
function App() {

  const router = createBrowserRouter([
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
