import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
      
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Authentication() {
 

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState(false);
    const [messages, setMessages] = React.useState("");


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* Background Image Wrapper */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyJTIwZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container component="main" maxWidth="xs" sx={{ bgcolor: 'rgba(255,255,255,0.8)', borderRadius: 2, boxShadow: 3, p: 4 }}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
                <div>
                    <Button variant={formState == 0 ? "contained" : " "} onClick={()=>{setFormState(0)}}>
                        Sign In
                    </Button>
                    <Button variant={formState == 1 ? "contained" : " "} onClick={()=>{setFormState(1)}}>
                        Sign Up 
                    </Button>
                </div>
            <Box component="form"  noValidate sx={{ mt: 1 }}>
              {formState === 1 ? (
                 <TextField
                  margin="normal"
                   required
                    fullWidth
                    id="fullname"
                   label="Full Name"
                   name="fullname"
                    autoComplete="fullname"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                 />
                ) : null}
        
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
            
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
