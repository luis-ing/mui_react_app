import { Toolbar, Typography, IconButton, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Navbar
                    </Typography>
                    <Button variant='text' color='inherit'>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;