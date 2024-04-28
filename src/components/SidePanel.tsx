import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LoginIcon from '@mui/icons-material/Login';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const SidePanel = () => {
    return (
        <Box
            sx={{ width: '100%', maxWidth: 200 }}>
            <List>
                <Link to='/'>
                    <ListItem disablePadding id='menu-login'>
                        <ListItemButton>
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary='Login' />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to='/students'>
                    <ListItem disablePadding id='menu-students'>
                        <ListItemButton>
                            <ListItemIcon>
                                <ImportContactsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Students' />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Box>
    )
}

export default SidePanel