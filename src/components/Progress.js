import React from 'react';
import { Typography } from '@material-ui/core';
import './Progress.css';

const Progress = ({ attempt, guessList }) => (
    <div>
        <Typography style={{marginTop: '50px'}} variant='h2'>Guess</Typography>
        <ul className='progressBar__history'>
            {guessList}
        </ul>
    </div>
)

export default Progress;