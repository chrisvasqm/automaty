import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Card, Drawer, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SidePanel from './SidePanel';

const Navbar = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('md'))
    const [open, setOpen] = useState(false)

    const toggleDrawer = () => setOpen(!open)

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
                            <>
                                <IconButton onClick={toggleDrawer}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    open={open}
                                    onClose={toggleDrawer}
                                    onClick={toggleDrawer}>
                                    <SidePanel />
                                </Drawer>
                            </>
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