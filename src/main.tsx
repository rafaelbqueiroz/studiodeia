import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import { PrivacyPolicy } from './pages/PrivacyPolicy.tsx';
import { Terms } from './pages/Terms.tsx';
import { CookiePolicy } from './pages/CookiePolicy.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/politica-de-privacidade",
    element: <PrivacyPolicy />,
  },
  {
    path: "/termos-de-uso",
    element: <Terms />,
  },
  {
    path: "/politica-de-cookies",
    element: <CookiePolicy />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
