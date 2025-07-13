import { Backdrop, Button, Paper, Typography } from '@mui/material';

interface IConfirmationPopup {
  open: boolean;
  onClose: () => void;
  formData: {
    firstName?: string;
    lastName?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    crisisArea: string;
    clothing: string;
    station: string;
  };
}

const ConfirmationPopup = ({ open, onClose, formData }: IConfirmationPopup) => {
  const currentDate = new Date();
  return (
    <Backdrop sx={{ zIndex: 9999 }} open={open}>
      <Paper
        elevation={5}
        sx={{ width: '100vw', height: '100vh', paddingLeft: '32px' }}
      >
        <Typography variant={'body1'} sx={{ marginTop: '16px' }}>
          Erhalten durch:
        </Typography>
        <Typography
          variant={'body1'}
          sx={{ marginLeft: '8px', marginBottom: '8px' }}
        >
          {formData.station}
        </Typography>
        {formData.station === 'Abholung' && (
          <>
            <Typography variant={'body1'} sx={{ marginTop: '16px' }}>
              Unter der Anschrift:
            </Typography>
            <Typography
              variant={'body1'}
              sx={{ marginLeft: '8px' }}
            >{`${formData.firstName} ${formData.lastName}`}</Typography>
            <Typography variant={'body1'} sx={{ marginLeft: '8px' }}>
              {formData.address}
            </Typography>
            <Typography
              variant={'body1'}
              sx={{ marginLeft: '8px' }}
            >{`${formData.postalCode} ${formData.city}`}</Typography>
          </>
        )}
        <Typography variant={'body1'} sx={{ marginTop: '16px' }}>
          Typ der Kleidung ist:
        </Typography>
        <Typography
          variant={'body1'}
          sx={{ marginLeft: '8px', marginBottom: '8px' }}
        >
          {formData.clothing}
        </Typography>
        <Typography variant={'body1'} sx={{ marginTop: '16px' }}>
          Versendet nach:
        </Typography>
        <Typography
          variant={'body1'}
          sx={{ marginLeft: '8px', marginBottom: '8px' }}
        >
          {formData.crisisArea}
        </Typography>
        <Typography variant={'body1'} sx={{ marginTop: '16px' }}>
          Spende registriert am:
        </Typography>
        <Typography
          variant={'body1'}
          sx={{ marginLeft: '8px', marginBottom: '8px' }}
        >
          {`${currentDate.toLocaleDateString('de-DE', {})} um ${currentDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr`}
        </Typography>
        <Button sx={{ marginTop: '16px' }} onClick={onClose}>
          Bestätigen
        </Button>
      </Paper>
    </Backdrop>
  );
};

export default ConfirmationPopup;
