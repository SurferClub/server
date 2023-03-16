import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  createTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#716868",
    },
  },
});

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <AppBar position="static" color="transparent" >
          <Container>
            <Toolbar>
              <Typography sx={{ flexGrow: 1 }}>
                <Link to="/" style={{ textDecoration: "none", color: "#eee" }}>
                  INVENTARIO
                </Link>
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/product/new")}
              >
                save
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate("/products/stock")}
              >
                Stock
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      {/* <Toolbar>
        <Typography sx={{flexGrow: 1}}>hello</Typography>
        <Typography >hola mundo</Typography>
    </Toolbar> */}
    </>
  );
}
