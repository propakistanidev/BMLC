import React from 'react'
import { createRoot } from 'react-dom/client'
import AuthLayout from './components/AuthLayout'

import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.tsx'
import Pricing from './pages/Pricing.tsx'
import LifeCoaches from './pages/LifeCoaches.tsx'
import Contact from './pages/Contact.tsx'
import Layout from './components/Layout.tsx'
import SignIn from './pages/SignIn.tsx'
import { Toaster } from 'react-hot-toast'
import SignUpPage from './pages/SignUpPage.tsx'
import AdminPanel from './pages/AdminPanel.tsx'
import UserPanel from './pages/UserPanel.tsx'
import Sessions from './pages/Sesions.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'about', element: <About /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'contact', element: <Contact /> },
      { path: 'lifecoaches', element: <LifeCoaches /> },

    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: 'signin', element: <SignIn /> },
      { path: 'signuppage', element: <SignUpPage /> },
      { path: "/AdminPanel", element: <AdminPanel /> },
      { path: "/UserPanel", element: <UserPanel /> },
      { path: "/Sessions", element: <Sessions /> }

    ],
  },
])
createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position='bottom-left' reverseOrder={false} />
  </React.StrictMode>,
);