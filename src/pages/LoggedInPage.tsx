import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const LoggedInPage = () => {
    return (
        <Box
            sx={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center'
            }}>
            <Stack gap={2} alignItems={'center'}>
                <Typography
                    align='center'
                    variant='h2'
                    sx={{ fontSize: 22 }}>
                    Welcome back
                </Typography>

                <Link to='/'>
                    <Button
                        variant='contained'
                        type='submit'>
                        Sign Out
                    </Button>
                </Link>
            </Stack>
        </Box>
    )
}

export default LoggedInPage