import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Admin, Menu } from '@rsuite/icons';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Webcam  from 'react-webcam';
import '../src/sidebar.css';

function TemporaryDrawer() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    left: false,
  });

  const [ist, setIst] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ left: open });
  };

  const handleNavigation = (url) => {
    if (url === '/Webcam') {
      setIst(true);
    } else {
      setIst(false); // Close the webcam when navigating away from "Webam1"
      navigate(url);
    }
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Donate', 'Deer', 'Tiger', 'Blackpanther', 'Rhinoceros', 'Lion', 'Webcam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon />
            <ListItemText
              primary={text}
              onClick={() => handleNavigation(`/${text}`)}
              style={{ cursor: 'pointer' }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button id='btn' onClick={toggleDrawer(true)}>
        <Menu />
      </Button>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
      {ist && (
        <div>
          <Webcam />
        </div>
      )}
    </div>
  );
}

export default TemporaryDrawer;
