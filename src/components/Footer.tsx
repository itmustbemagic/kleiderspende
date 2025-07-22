import {
  Button,
  Divider,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router';

const Footer = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery('(min-width:1024px)');
  return isDesktop ? (
    <Paper
      square
      elevation={4}
      sx={{
        width: '100%',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography>© 2025 Kleiderspende e.V.</Typography>
      <Divider
        sx={{
          textTransform: 'none',
          color: 'text.primary',
          marginRight: '8px',
          marginLeft: '16px',
          width: '5px',
          height: '24px',
        }}
        orientation={'vertical'}
      />
      <Button
        sx={{
          textTransform: 'none',
          color: 'text.primary',
        }}
        onClick={() => navigate('/impressum')}
      >
        <Typography>Impressum</Typography>
      </Button>
      <Divider
        sx={{
          textTransform: 'none',
          color: 'text.primary',
          marginRight: '8px',
          marginLeft: '8px',
          width: '5px',
          height: '24px',
        }}
        orientation={'vertical'}
      />
      <Button
        sx={{
          textTransform: 'none',
          color: 'text.primary',
        }}
        onClick={() => navigate('/datenschutz')}
      >
        <Typography>Datenschutz</Typography>
      </Button>
    </Paper>
  ) : (
    <Paper
      square
      elevation={4}
      sx={{
        paddingTop: '8px',
        width: '100%',
        height: 'auto',
        display: 'inline-grid',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography>© 2025 Kleiderspende e.V.</Typography>
      <Button
        sx={{
          paddingTop: '8px',
          textTransform: 'none',
          color: 'text.primary',
        }}
        onClick={() => navigate('/impressum')}
      >
        <Typography>Impressum</Typography>
      </Button>
      <Button
        sx={{
          textTransform: 'none',
          color: 'text.primary',
          marginBottom: '8px',
        }}
        onClick={() => navigate('/datenschutz')}
      >
        <Typography>Datenschutz</Typography>
      </Button>
    </Paper>
  );
};

export default Footer;
