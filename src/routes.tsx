import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import LoggedInPage from './pages/LoggedInPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <LoginPage /> },
            { path: '/loggedIn', element: <LoggedInPage /> },
        ]
    }
])

export default router;