import { Card, Typography } from '@mui/material'

const Navbar = () => {
    return (
        <nav>
            <Card elevation={6} sx={{ padding: 2, borderRadius: 0 }}>
                <Typography variant='h1' fontSize={24}>Automaty</Typography>
            </Card>
        </nav>
    )
}

export default Navbar