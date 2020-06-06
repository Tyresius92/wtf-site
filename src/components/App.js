import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Container,
  Typography,
  makeStyles,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import utils from '../utils';

const { generateHeaderText, generateBodyText, generateButtonText } = utils;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
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
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  madeWithLove: {
    flexGrow: 1,
  },
}));

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
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          What the fuck do I do in quarantine?
        </Typography>
        <Typography variant="h2" className={classes.text}>
          {header}
        </Typography>
        <div className={classes.body}>
          <Typography variant="h2" className={classes.text}>
            {body}
          </Typography>
        </div>

        <Button
          size="large"
          className={classes.nextButton}
          onClick={getAnother}
        >
          {anotherText}
        </Button>
      </Container>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.madeWithLove}>
            Made with love by Tyrel
          </Typography>
          <IconButton
            color="inherit"
            href="https://github.com/Tyresius92/wtf-site"
          >
            <GitHubIcon color="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;
