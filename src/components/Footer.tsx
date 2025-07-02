import { Paper, Typography } from '@mui/material';

const Footer = () => {
  return (
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
    </Paper>
  );
};

export default Footer;
