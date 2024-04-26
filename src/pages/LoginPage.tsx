import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
    username: z
        .string({ required_error: 'Username is required' })
        .min(1, 'Username is required'),
    password: z
        .string({ required_error: 'Password is required' })
        .min(1, 'Password must have at least 4 characters')
})

type FormData = z.infer<typeof schema>

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <Box
            sx={{
                minHeight: '96vh',
                display: 'flex',
                alignItems: 'center'
            }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ minWidth: '350px' }} elevation={8}>
                    <CardContent>
                        <Stack gap={2}>
                            <Typography
                                align='center'
                                variant='h2'
                                sx={{ fontSize: 22 }}>
                                Login
                            </Typography>

                            <TextField
                                id='username'
                                type='text'
                                label='Username'
                                variant='outlined'
                                {...register('username')}
                            />
                            {errors?.username && <Typography color={'red'}>{errors.username.message}</Typography>}

                            <TextField
                                id='password'
                                type='password'
                                label='Password'
                                variant='outlined'
                                {...register('password')}
                            />
                            {errors?.password && <Typography color={'red'}>{errors.password.message}</Typography>}

                            <Button variant='contained' type='submit'>Sign In</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </form>
        </Box>
    )
}

export default LoginPage