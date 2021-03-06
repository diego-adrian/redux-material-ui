import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button} from '@material-ui/core';
import { MovieIcon } from '../../icons';
import styles from './styles';

export default () => {
  const [searchText, setSearchText] = useState('');
  const classes = styles();
  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  }
  const handleClearTextClick = () => {
    console.log('------------------------------------');
    console.log('Me hiciste click');
    console.log('------------------------------------');
  }  
  const handleSearchTextClick = () => {
    console.log('------------------------------------');
    console.log('Me hiciste click');
    console.log('------------------------------------');
  }
  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Typography className={classes.title}>Bienvenido!!</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <MovieIcon className={classes.movieIcon}></MovieIcon>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar"
          onChange={handleSearchTextChange}
          className={classes.textFieldSearch}
        ></TextField>
        <Grid container className={classes.buttonsContainer}>
          <Grid item>
            <Button variant="contained" onClick={handleClearTextClick}>Limpiar</Button>
            <Button variant="contained" color="primary" onClick={handleSearchTextClick} className={classes.searchButton}>Buscar</Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}