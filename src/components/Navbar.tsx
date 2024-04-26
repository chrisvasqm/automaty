import { Card, Typography, Box, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Card elevation={6} sx={{ padding: 2, borderRadius: 0 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <Typography
                        id='app-name'
                        variant='h1'
                        fontSize={24}>Automaty</Typography>
                    <Link to="https://github.com/chrisvasqm/automaty" target='_blank'>
                        <IconButton color='primary' size='small'>
                            <GitHubIcon />
                        </IconButton>
                    </Link>
                </Box>
            </Card>
        </nav>
    )
}

export default Navbar