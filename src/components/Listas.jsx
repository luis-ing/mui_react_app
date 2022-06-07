import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
import CameraIcon from '@mui/icons-material/Camera';

const Listas = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <CloudIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Nube
                    </ListItemText>
                </ListItem>
                
                <ListItem button>
                    <ListItemIcon>
                        <CameraIcon />
                    </ListItemIcon>
                    <ListItemText primary='Segundo texto' />
                </ListItem>
            </List>
        </div>
    )
}

export default Listas;