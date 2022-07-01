import './App.css';
import { Button, TextField } from '@mui/material';
import { styled, createTheme } from "@mui/system"
import background from './test-bg.jpg';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import glassCard from './glassCard.module.css';

const Background = styled('div')({
  backgroundImage: `url(${background})`,
  height: "100vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
});

function App() {
  return (
    <Background>
      <CssBaseline />
      <Container maxWidth="sm" className={glassCard.card}
        sx={{ height: 700, width: 300}}>

      </Container>
    </Background>
  );
}

export default App;

