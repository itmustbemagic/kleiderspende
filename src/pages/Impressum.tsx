import Content from '../components/Content';
import { Box } from '@mui/material';

const Impressum = () => {
  return (
    <Content>
      <Box sx={{ marginLeft: '32px', marginRight: '32px' }}>
        <h1>Impressum</h1>

        <p>
          Kleiderspende e. V.
          <br />
          Super Str. 42
          <br />
          12345 Megastadt
        </p>

        <p>
          <strong>Vertreten durch:</strong>
          <br />
          Luise Beispiel
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 123 44 55 66
          <br />
          Telefax: +49 (0) 123 44 55 99
          <br />
          E-Mail: mustermann@kleiderspende.de
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
          Umsatzsteuergesetz:
          <br />
          DE999999999
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>
          Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
        </p>
      </Box>
    </Content>
  );
};

export default Impressum;
