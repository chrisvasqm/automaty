import { Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const ErrorPage = () => {
    return (
        <>
            <Navbar />

            <Stack
                gap={2}
                height={'90vh'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Typography variant='h3'>404 Not Found</Typography>

                <Typography>Seems like you have lost your way.</Typography>

                <Link to='/'>
                    <Button variant='contained'>Go Home</Button>
                </Link>
            </Stack>
        </>
    )
}

export default ErrorPage