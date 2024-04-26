import { Button, TextField } from '@mui/material'

const HomePage = () => {
    return (
        <div style={{ height: '90vh' }}>
            <form>
                <TextField
                    id='username'
                    type='text'
                    label='Username' />
                <TextField
                    id='password'
                    type='password'
                    label='Password' />
                <Button variant='contained'>Sign In</Button>
            </form>
        </div>
    )
}

export default HomePage