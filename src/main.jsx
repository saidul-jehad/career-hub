import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import ErrorPage from './component/ErrorPage/ErrorPage';
import JobDetails from './component/JobDetails/JobDetails';
import Job from './component/Job/Job';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/job/:id',
        element: <div>All  Jobs Coming</div>
      },

      {
        path: '/jobs',
        element: <Job></Job>,
        loader: () => fetch('./public/jobs.json')

      }
    ]

  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
