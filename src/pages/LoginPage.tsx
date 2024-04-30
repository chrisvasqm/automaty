import { zodResolver } from '@hookform/resolvers/zod'
import { Alert, Box, Button, Card, CardContent, CircularProgress, Stack, TextField, Typography } from '@mui/material'
import delay from 'delay'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const schema = z.object({
    username: z
        .string({ required_error: 'Username is required' })
        .min(5, 'Username must have at least 5 characters'),
    password: z
        .string({ required_error: 'Password is required' })
        .min(4, 'Password must have at least 4 characters')
})

type FormData = z.infer<typeof schema>

const LoginPage = () => {
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onSubmit = async (data: FormData) => {
        const { username, password } = data;

        if (username === 'admin' && password === 'admin') {
            setLoading(true)
            const random = Math.floor(Math.random() * 5) + 1
            await delay(random * 1000)
            setLoading(false)
            navigate('/loggedIn')
        }
        else {
            setLoginError(true)
        }
    }

    return (
        <Box
            sx={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center'
            }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ minWidth: '300px' }} elevation={4}>
                    <CardContent>
                        <Stack gap={2}>
                            <Typography
                                id='title-login'
                                align='center'
                                variant='h2'
                                sx={{ fontSize: 20 }}>
                                Login
                            </Typography>

                            {loginError && <Alert severity="error">Invalid username and/or password</Alert>}

                            <TextField
                                id='username'
                                type='text'
                                label='Username'
                                variant='outlined'
                                error={errors.username !== undefined}
                                helperText={errors.username && errors.username.message}
                                disabled={isLoading}
                                {...register('username')}
                            />

                            <TextField
                                id='password'
                                type='password'
                                label='Password'
                                variant='outlined'
                                error={errors.password !== undefined}
                                helperText={errors.password && errors.password.message}
                                disabled={isLoading}
                                {...register('password')}
                            />

                            <Button
                                id='sign-in'
                                disabled={isLoading}
                                variant='contained'
                                type='submit'>
                                {isLoading ? <CircularProgress size={20} /> : 'Sign In'}
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </form>
        </Box>
    )
}

export default LoginPage