import {
    Container,
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import React from 'react'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <>
    <Box>

    <AppBar position='static'>
        <Container>
        <Toolbar>

        <Typography sx={{flexGrow: 1}}>
          <Link to="/" style={{textDecoration: "none", color: "#eee"}}
          >INVENTARIO</Link>
        </Typography>
        <Button variant='contained'
        onClick={()=> navigate("/product/new")}
        >save</Button>
        </Toolbar>
        </Container>
    </AppBar>
    </Box>
    
    {/* <Toolbar>
        <Typography sx={{flexGrow: 1}}>hello</Typography>
        <Typography >hola mundo</Typography>
    </Toolbar> */}


    </>
  )
}



