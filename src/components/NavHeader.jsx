import { AppBar, Box, Container, List, ListItem, ListItemButton, Switch, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { flipTheSwitch } from '../modeSlice'

function NavHeader() {


    const theme= useTheme()

    const mode = useSelector((state)=>state.mode.value)
    const dispatch = useDispatch()

    console.log(theme.typography.fontFamily)



  return (
    <AppBar >
        <Toolbar disableGutters={true}  sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
           
                <Box>
                    <span onChecked={()=>dispatch(flipTheSwitch())}>{mode}</span>
                    <Switch color='error'></Switch>
                </Box>
                <Typography fontSize="2.6rem" fontFamily="Oxanium">Raven Design</Typography>
                <List sx={{display:"flex",justifyContent:"space-between"}}>
                    <ListItem>
                        <ListItemButton>Home</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{textWrap:"nowrap"}}>Sobre mi  </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>Portafolio</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>Contactame</ListItemButton>
                    </ListItem>
                </List>

           
        </Toolbar>
    </AppBar>
  )
}

export default NavHeader