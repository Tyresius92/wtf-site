import React, { useState } from 'react';
import { Button, Container, Typography, makeStyles } from '@material-ui/core';
import utils from '../utils';

const { generateHeaderText, generateBodyText, generateButtonText } = utils;

const useStyles = makeStyles({
  container: {
    margin: '0 75px',
    padding: '25px',
  },
  title: {
    margin: '20px 0',
  },
  body: {
    minHeight: '150px',
  },
  text: {
    margin: '15px 0',
  },
  nextButton: {
    marginTop: '20px',
  },
});

const App = () => {
  const classes = useStyles();

  const [header, setHeader] = useState(generateHeaderText());
  const [body, setBody] = useState(generateBodyText());
  const [anotherText, setAnotherText] = useState(generateButtonText());

  const getAnother = () => {
    setHeader(generateHeaderText());
    setBody(generateBodyText());
    setAnotherText(generateButtonText());
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        What the fuck should I do doing quarantine?
      </Typography>
      <Typography variant="h2" className={classes.text}>
        {header}
      </Typography>
      <div className={classes.body}>
        <Typography variant="h2" className={classes.text}>
          {body}
        </Typography>
      </div>

      <Button size="large" className={classes.nextButton} onClick={getAnother}>
        {anotherText}
      </Button>
    </Container>
  );
};

export default App;
