import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import Content from '../components/Content';
import { FormEvent, useState } from 'react';
import ConfirmationPopup from '../components/ConfirmationPopup';

const addressPostal = '12345';
const addressCity = 'Megastadt';
const addressStreet = 'Super Str. 42';

const Donation = () => {
  const [station, setStation] = useState('Geschäftsstelle');
  const [postalCodeError, setPostalCodeError] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [crisisArea, setCrisisArea] = useState('Demokratische Republik Kongo');
  const [clothing, setClothing] = useState('T-Shirt');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!postalCodeError) {
      setOpenConfirmation(true);
    }
  };

  const validatePostalCode = (postalCodeInput: string) => {
    setPostalCode(postalCodeInput);
    if (
      postalCodeInput.length !== 5 ||
      !/^\d+$/.test(postalCodeInput) ||
      addressPostal.slice(0, 2) !== postalCodeInput.slice(0, 2)
    ) {
      setPostalCodeError(true);
    } else {
      setPostalCodeError(false);
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Content>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <FormControl sx={{ paddingTop: '16px' }}>
            <FormLabel>Abgabe/Abholung</FormLabel>
            <RadioGroup
              defaultValue={station}
              value={station}
              onChange={(e) => setStation(e.target.value)}
            >
              <FormControlLabel
                value="Geschäftsstelle"
                control={<Radio />}
                label="Übergabe an der Geschäftsstelle"
              />
              <FormHelperText>{`${addressStreet}, ${addressPostal} ${addressCity}`}</FormHelperText>
              <FormControlLabel
                value="Abholung"
                control={<Radio />}
                label="Abholung"
              />
              <FormHelperText>
                Abholung nur im Postleitzahlbereich 12***
              </FormHelperText>
            </RadioGroup>
            {station === 'Abholung' && (
              <Card
                sx={{
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <TextField
                  required
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value as any)}
                  label={'Vorname'}
                />
                <TextField
                  required
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value as any)}
                  label={'Nachname'}
                />
                <TextField
                  required
                  value={address}
                  onChange={(event) => setAddress(event.target.value as any)}
                  label={'Anschrift'}
                />
                <TextField
                  value={postalCode}
                  onChange={(event) =>
                    validatePostalCode(event.target.value as any)
                  }
                  error={postalCodeError}
                  required
                  label={'Postleitzahl'}
                />
                <TextField
                  required
                  value={city}
                  onChange={(event) => setCity(event.target.value as any)}
                  label={'Stadt'}
                />
                <TextField disabled label={'Land'} value={'Deutschland'} />
              </Card>
            )}
          </FormControl>
          <FormControl>
            <FormHelperText>Kleidung</FormHelperText>
            <Select
              value={clothing}
              onChange={(event) => setClothing(event.target.value)}
            >
              <MenuItem value={'T-Shirt'}>T-Shirt</MenuItem>
              <MenuItem value={'Jeans'}>Jeans</MenuItem>
              <MenuItem value={'Shorts'}>Schorts</MenuItem>
              <MenuItem value={'Schuhe'}>Schuhe</MenuItem>
              <MenuItem value={'Pullover'}>Pullover</MenuItem>
              <MenuItem value={'Jacke'}>Jacke</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormHelperText>Krisengebiet</FormHelperText>
            <Select
              value={crisisArea}
              onChange={(event) => setCrisisArea(event.target.value)}
            >
              {/*https://www.rescue.org/de/artikel/top-10-krisen-welt-nicht-ignorieren-2024*/}
              <MenuItem value={'Demokratische Republik Kongo'}>
                Demokratische Republik Kongo
              </MenuItem>
              <MenuItem value={'Äthiopien'}>Äthiopien</MenuItem>
              <MenuItem value={'Niger'}>Niger</MenuItem>
              <MenuItem value={'Somalia'}>Somalia</MenuItem>
              <MenuItem value={'Mali'}>Mali</MenuItem>
              <MenuItem value={'Myanmar'}>Myanmar</MenuItem>
              <MenuItem value={'Burkina Faso'}>Burkina Faso</MenuItem>
              <MenuItem value={'Südsudan'}>Südsudan</MenuItem>
              <MenuItem value={'Gaza'}>Gaza</MenuItem>
              <MenuItem value={'Sudan'}>Sudan</MenuItem>
            </Select>
          </FormControl>
          <Button sx={{ marginBottom: '16px' }} type="submit">
            Spende registrieren
          </Button>
        </Box>
      </Content>
      <ConfirmationPopup
        open={openConfirmation}
        onClose={() => {
          setOpenConfirmation(false);
          setAddress('');
          setCity('');
          setFirstName('');
          setLastName('');
          setPostalCode('');
          setCrisisArea('Demokratische Republik Kongo');
          setClothing('T-Shirt');
          setStation('Geschäftsstelle');
        }}
        formData={{
          firstName,
          lastName,
          address,
          postalCode,
          city,
          clothing,
          crisisArea,
          station,
        }}
      />
    </Box>
  );
};

export default Donation;
