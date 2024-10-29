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
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid2'
import { Card } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import {SignInPage} from '@toolpad/core/SignInPage'
const contacts = [{name: "Sinai", pfp: sinaPFP},{name: "Josh", pfp: joshPFP},{name:"David"},{name:"Montsy"},{name: "Sagel"}]
const providers = [
  { id: 'github', name: 'GitHub' },
  { id: 'google', name: 'Google' },
  { id: 'facebook', name: 'Facebook' },
  { id: 'twitter', name: 'Twitter' },
  { id: 'linkedin', name: 'LinkedIn' },
];


function App() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  //   ...theme.applyStyles('dark', {
  //     backgroundColor: '#1A2027',
  //   }),
  // }));
  const DrawerList = (
    
    <Box  sx={{ width: 350, backgroundColor: '#333333', color: 'white', height:"100%"}} onClick={toggleDrawer(false)}>
      
      <List>
        {['New Message'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <InboxIcon htmlColor='white'/> 
              </ListItemIcon>
              <ListItemText primary={text} />                                
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Autocomplete
        id="searchContacts"
        color="secondary"
        freeSolo
        options={contacts.map((option) => option.name)}
        renderInput={(params) => <TextField color="primary" {...params} label="Search Contacts" />}
      /> 
      <List>
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
  
{/**/}
  return(
    <>
      {/* <SignInPage providers={providers}>

      </SignInPage> */}
      <Drawer sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#33333', height: '100vh', width: 350, minHeight: '100vh', position: 'absolute'
        },
      }} variant="permanent">{DrawerList}</Drawer>
      <Stack direction={'row'}>
      {/* Paper or stack for message bar*/}
      {/* Use 'Skeleton' component while meassages are loading */}
       <Grid container spacing={2}  position={'fixed'} width={'50%'}right={'10px'} >
        <Grid item size={6}></Grid>
        <Grid item display={'flex'} justifyContent={'right'} alignItems={"right"} size={6} >
          <Card display="flex" sx={{height:'4vh', color:'black', width:'20vh',backgroundColor:'lightGrey'}}>
            <Typography>Message 1</Typography>
          </Card>
        </Grid>
        <Grid item size={6}>
          <Card sx={{height:'4vh', color:'black', width:'10vw',backgroundColor:'lightGreen'}}>
            <Typography>Hello World!</Typography>
          </Card>
        </Grid>
      </Grid> 
    
        

        <Box >
          <TextField sx={{position: 'fixed', right:'20px', bottom: '30px', width: "50%", justifyContent: 'center'}} id="filled-basic" label="Filled" variant="filled" />
        </Box>
      
    </Stack>
  </>
  ) 
}

export default App;
