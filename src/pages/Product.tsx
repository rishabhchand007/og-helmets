import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  ThemeProvider,
  Box
} from "@mui/material";
import Products from "../Json/Products.json";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {theme} from '../Theme'
const Product = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" sx={{ m: 6 }}>
          PRODUCTS
        </Typography>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {Products.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} >
                <Card
                
                  sx={{
                    height: "27rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`images/${item.image}`}
                    alt="random"
                    sx={{ overflow: "hidden" }}
                  />
                  <CardContent sx={{ flexGrow: 1}} >
                    <Typography gutterBottom variant="h6" >
                      {item.name}
                    </Typography>
                    <Typography color='#696969'>
                      Rs: {item.price}
                    </Typography>
                  </CardContent>
                  
                  <CardActions sx={{display:'flex', justifyContent:'flex-end'}}>
                    <Box >
                    <Button size="small" sx={{fontSize:"1rem", float:"right"}}> <VisibilityIcon sx={{m:1}}/>View</Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      </ThemeProvider>
    </>
  );
};

export default Product;
