import { Typography, Button } from "@mui/material";
import Hidden from '@mui/material/Hidden';

const Oculto = () => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho: No deifinido
            </Typography>

            <Hidden xsDown>
                <Button variant="contained" color="primary">
                    xs
                </Button>
            </Hidden>
        </div>
    )
}

export default Oculto;