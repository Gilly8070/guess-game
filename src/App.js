import React from 'react';
import { Grid, Typography, Paper, Divider} from '@material-ui/core';

import { generateRandomNumber } from './util/index'

import Form from './components/Form';
import Progress from './components/Progress';

class App extends React.Component {
    state = {
    generateNum: generateRandomNumber(),
    guess: undefined,
    allGuess: [],
    attempt: 0,
  }

  updateAppState = guess => {
    const absDiff = Math.abs(guess - this.state.generateRandomNumber);

    this.setState(prevState => ({
      guess,
      allGuess: [...prevState.allGuess, { guess }],
      attempt: prevState + 1
    }))


  }
  render() {
    const { allGuess, attempt } = this.state;

    const guessList = allGuess.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ))

      return (
        <Grid container style={{ height: '100vh' }} justify='center' alignItems='center'>
          <Grid item xs={3}>
            <Paper style={{padding: '50px'}} elevation={6}>
              <Typography align='center' variant='h2' gutterBottom>Hot or Cold</Typography>
              <Divider style={{margin: '20px 0'}} />
              <Form returnGuessToApp ={guess => this.updateAppState(guess)} />
              <Progress attempt={attempt} guessList={guessList} />
            </Paper>
          </Grid>
        </Grid>
  );
  }
  
}

export default App;
