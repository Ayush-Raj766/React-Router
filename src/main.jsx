import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './component/Home/About.jsx'
import Home from './component/Home/Home.jsx'
import ContactUs from './component/Home/ContactUs.jsx'
import User from './component/User/User.jsx'
import Github, { githubinfoLoader } from './component/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact us",
//         element:<ContactUs/>
//       },
//       {
//         path:"user/:userid",
//         element:<User/>
//       },
//       {
//         loader:{githubinfoLoader},
//         path:"Github",
//         element:<Github/>
//       }
//     ]
//   }
// ])
//children mai loaxder nahi chal raha hai iss liye route use karna hi padega
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact us' element={<ContactUs/>} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubinfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
