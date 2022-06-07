import * as React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, TextField, Box, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { Redirect } from "react-router-dom";

export default function Login() {
    const [values, setValues] = React.useState({
        username: '',
        password: ''
    });

    const inputChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const onSubmit = () => {
        console.log(values)
        axios.post('http://localhost:3001/login', values)
        .then(({data}) => {
            console.log(data.username)
            localStorage.setItem('auth', 'yes');
            (<Redirect to="home" />)
            /*useNavigate("home", { replace: true })*/
        })
        .catch(({response}) => {
            console.log(response.status)
        });

        /*const url_api = "http://localhost:3001/login";
        let response = fetch(url_api, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: values
        });
        let res = response;
        console.log(res);*/
    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const paperStyle = { padding: "3rem" };
    return (
        <Grid container justifyContent="center" alignItems="center" style={paperStyle}>
            <Card sx={{ maxWidth: 345, paddingBottom: 5 }} >
                <CardMedia
                    component="img"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        Welcome to Lizard
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        Sign In
                    </Typography>
                    <Box
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="stretch"
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '94%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            value={values.username}
                            onChange={inputChange('username')}
                            name='username'
                        />

                        <FormControl sx={{ m: 1, width: '94%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={inputChange('password')}
                                name='password'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button type='submit' color='primary' variant='contained' fullWidth onClick={onSubmit}>Log In</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}