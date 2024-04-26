import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <HomePage /> }
        ]
    }
])

export default router;