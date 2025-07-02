import { Paper } from '@mui/material';
import { ReactNode } from 'react';

const Content = ({ children }: { children?: ReactNode }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 120px)',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
      }}
      square
    >
      {children}
    </Paper>
  );
};

export default Content;
