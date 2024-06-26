import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './pages/ErrorPage';
import LoggedInPage from './pages/LoggedInPage';
import LoginPage from './pages/LoginPage';
import StudentsPage from './pages/StudentsPage';
import ContactsPage from './pages/ContactsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <LoginPage /> },
            { path: '/loggedIn', element: <LoggedInPage /> },
            { path: '/students', element: <StudentsPage /> },
            { path: '/contacts', element: <ContactsPage /> },
        ]
    }
])

export default router;