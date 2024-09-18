import React from 'react'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayout from './components/RoootLayout'
import ItemPage from './pages/ItemPage'
// import ItemsPages from './pages/ItemsPages'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:[{
        index:true,
        element:<HomePage />
      },
      {
        path: 'item/:category',
        element: <ItemPage />
      },
      {
        path:'next-page',
        element:<About/>
      },
      {
        path:'contact-page',
        element:<Contact/>
      }
    ]
    }
    
 
])
  
  return <RouterProvider router ={router} />
}

export default App

