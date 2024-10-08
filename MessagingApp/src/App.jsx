import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar'
import sinaPFP from './assets/sinaPFP.jpg'
import joshPFP from './assets/joshPFP.jpg'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
const contacts = [{name: "Sinai", pfp: sinaPFP},{name: "Josh", pfp: joshPFP},{name:"David"},{name:"Montsy"},{name: "Sagel"}]


function App() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }
  const DrawerList = (
    
    <Box  sx={{ width: 350, backgroundColor: '#333333', color: 'white', height:"100%"}} onClick={toggleDrawer(false)}>
      <List>
        {['New Message'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon/> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />                                
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List >
        {contacts.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton>
             <Avatar sx={{margin:1.5}} alt="Sina" src={text.pfp}/ >
              <ListItemText  sx={{ fontSize: '36px !important' }} primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
        
      </List>
       <Box>
       <Typography>Username</Typography>
       <Typography>joined 20 Jun 2023</Typography>
     </Box>
    </Box>
  );
  return(

    <>
    <Drawer sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#33333', height: '100vh', width: 350, minHeight: '100vh',
        },
      }} variant="permanent">{DrawerList}</Drawer>
      <TextField sx={{position: 'fixed', bottom: '0', width: "50%", justifyContent: 'center'}} id="filled-basic" label="Filled" variant="filled" />
    </>
  ) 
}

export default App;
