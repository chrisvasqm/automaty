import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <h1>Error</h1>
            <p>Seems like you have lost your way.</p>
            <Link to='/'><button>Go Home</button></Link>
        </>
    )
}

export default ErrorPage