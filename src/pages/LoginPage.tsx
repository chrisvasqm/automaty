import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material'

const LoginPage = () => {
    return (
        <Box
            sx={{
                minHeight: '96vh',
                display: 'flex',
                alignItems: 'center'
            }}>
            <form>
                <Card sx={{ minWidth: '300px' }} elevation={8}>
                    <CardContent>
                        <Stack gap={2}>
                            <Typography align='center' variant='h2' sx={{ fontSize: 22 }}>Login</Typography>
                            <TextField
                                id='username'
                                label='Username'
                                variant='outlined'
                            />
                            <TextField
                                id='password'
                                label='Password'
                                variant='outlined'
                            />
                            <Button variant='contained'>Sign In</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </form>
        </Box>
    )
}

export default LoginPage