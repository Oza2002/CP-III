import AppLayout from './layouts/app-layout';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landing';
import ProtectedRought from './components/protected-route';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import PostJob from './pages/post-job';
import SavedJobs from './pages/saved-jobs';
import MyJobs from './pages/my-jobs';
import { ThemeProvider } from './components/theme-provider';
import AdminDashboard from './pages/admin-dashboard';

const total=0;

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>,
    },
    {
      path:"/onboarding",
      element:
      <ProtectedRought>
        <Onboarding/>
      </ProtectedRought>,
    },
    {
      path:"/jobs",
      element:
      <ProtectedRought>
        <JobListing/>
      </ProtectedRought>,
    },
    {
      path:"/job/:id",
      element:
      <ProtectedRought>
        <JobPage/>
      </ProtectedRought>,
    },
    {
      path:"/post-job",
      element:
      <ProtectedRought>
        <PostJob/>
      </ProtectedRought>,
    },
    {
      path:"/saved-job",
      element:
      <ProtectedRought>
        <SavedJobs/>
      </ProtectedRought>,
    },
    {
      path:"/my-jobs",
      element:
      <ProtectedRought>
        <MyJobs/>
      </ProtectedRought>,
    },
    {
      path:"/admin-dashboard",
      element:
      <ProtectedRought>
        <AdminDashboard total={total}/>
      </ProtectedRought>,
    },

  ],
  },
]);

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App
