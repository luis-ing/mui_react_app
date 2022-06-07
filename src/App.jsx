import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './temaConfig';
import Listas from './components/Listas';
import Oculto from './components/Oculto';
import Naveg from './components/Nav';
import Login from './components/views/Login/Login';

function App() {
  const mngE = (<h4>Error 404</h4>); 
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="home" element={<Naveg />} />
          <Route exact path="*" element={mngE} />
        </Routes>
      </BrowserRouter>
      {/*<Naveg />
      <Navbar />
      <Listas />*/}

      {/*<Oculto />
      <Button variant="contained" color="primary" endIcon={<DeleteIcon />}>
        Hola Mundo!
      </Button>
      <Button variant="contained" color="error" startIcon={<AccessAlarmIcon />}>
        Hola Mundo!
      </Button>

      <IconButton>
        <DeleteIcon />
      </IconButton>

      <Typography variant="h1" color="initial" align='center'>
        Lorem
      </Typography>

      <Typography variant="body1" color="initial" align='center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magni iusto sapiente quaerat quo quos sequi ab odio veniam minima id eos minus, est libero, quasi maxime nobis corporis quas!
      </Typography>*/}
    </ThemeProvider>
  );
}

export default App;
