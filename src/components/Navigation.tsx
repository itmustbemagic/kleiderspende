import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Button,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Navigation = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box sx={{ width: '100%', height: '60px' }}>
      <AppBar
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {isDesktop && (
          <Toolbar>
            <Button
              sx={{
                textTransform: 'none',
                color: 'text.primary',
                marginRight: '8px',
              }}
              onClick={() => navigate('/')}
            >
              Spende Registrieren
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button
              sx={{
                textTransform: 'none',
                color: 'text.primary',
                marginRight: '8px',
                marginLeft: '8px',
              }}
              onClick={() => navigate('/impressum')}
            >
              Impressum
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button
              sx={{
                textTransform: 'none',
                color: 'text.primary',
                marginLeft: '8px',
              }}
              onClick={() => navigate('/datenschutz')}
            >
              Datenschutz
            </Button>
          </Toolbar>
        )}
        {!isDesktop && (
          <Toolbar sx={{ width: '100%', height: '60px' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2, marginLeft: '16px' }}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>
      {openDrawer && !isDesktop && (
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          anchor="left"
        >
          <Box sx={{ width: '100vw' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2, marginLeft: '16px', marginTop: '16px' }}
              onClick={() => setOpenDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
            <List>
              <ListItem
                sx={{ marginLeft: '16px' }}
                key={'spende'}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText
                    onClick={() => {
                      setOpenDrawer(false);
                      navigate('/');
                    }}
                    primary={'Spende Registrieren'}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{ marginLeft: '16px' }}
                key={'impressum'}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText
                    onClick={() => {
                      setOpenDrawer(false);
                      navigate('/impressum');
                    }}
                    primary={'Impressum'}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{ marginLeft: '16px' }}
                key={'datenschutz'}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText
                    onClick={() => {
                      setOpenDrawer(false);
                      navigate('/datenschutz');
                    }}
                    primary={'Datenschutz'}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Navigation;
