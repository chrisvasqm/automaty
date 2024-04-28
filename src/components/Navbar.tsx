import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Card, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <nav>
            <Card elevation={6} sx={{ padding: 2, borderRadius: 0 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <Stack direction={'row'} alignItems={'center'} gap={2}>
                        {
                            !isTablet &&
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        }
                        <Typography
                            id='app-name'
                            variant='h1'
                            fontSize={24}>
                            Automaty
                        </Typography>
                    </Stack>

                    <Link to="https://github.com/chrisvasqm/automaty" target='_blank'>
                        <IconButton id='link-github' color='primary' size='small'>
                            <GitHubIcon />
                        </IconButton>
                    </Link>
                </Box>
            </Card>
        </nav>
    )
}

export default Navbar