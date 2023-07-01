import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePage from './components/pages/create.jsx'
import HomePage from './components/pages'
import UpdatePage from './components/pages/update.jsx'
import SearchPage from './components/pages/search'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/create",
    element: <CreatePage />
  },
  {
    path: "/update",
    element: <UpdatePage />
  },
  {
    path: "/search",
    element: <SearchPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
