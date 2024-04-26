import { Box, Button, FormControl, Input, InputLabel, Stack } from '@mui/material'

const LoginPage = () => {
    return (
        <Box
            sx={{
                minHeight: '96vh',
                display: 'flex',
                alignItems: 'center'
            }}>
            <form>
                <Stack>
                    <FormControl sx={{ marginBottom: 2 }}>
                        <InputLabel>Username</InputLabel>
                        <Input
                            id='username'
                            sx={{ display: 'block' }}
                            type='text'
                        />
                    </FormControl>
                    <FormControl sx={{ marginBottom: 2 }}>
                        <InputLabel>Password</InputLabel>
                        <Input
                            id='password'
                            sx={{ display: 'block' }}
                            type='text'
                        />
                    </FormControl>
                    <Button variant='contained'>Sign In</Button>
                </Stack>
            </form>
        </Box>
    )
}

export default LoginPage