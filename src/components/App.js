import React, { useState, useEffect } from 'react';
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
import firebase from 'firebase/app';
import 'firebase/analytics';

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

const firebaseConfig = {
  apiKey: 'AIzaSyDunRfylaPOA9N2tiboU6qQn2Ub_CvMjMs',
  authDomain: 'wtf-site-5eff4.firebaseapp.com',
  databaseURL: 'https://wtf-site-5eff4.firebaseio.com',
  projectId: 'wtf-site-5eff4',
  storageBucket: 'wtf-site-5eff4.appspot.com',
  messagingSenderId: '736600996837',
  appId: '1:736600996837:web:e704ff32be4aa36b350d0c',
  measurementId: 'G-LCRXZ6FFGG',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

const App = () => {
  useEffect(() => {
    analytics.logEvent('page_load');
  }, []);
  const classes = useStyles();

  const [header, setHeader] = useState(generateHeaderText());
  const [body, setBody] = useState(generateBodyText());
  const [anotherText, setAnotherText] = useState(generateButtonText());

  const getAnother = () => {
    analytics.logEvent('button_click');
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
          variant="contained"
          color="primary"
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
            onClick={() => analytics.logEvent('github_icon_click')}
          >
            <GitHubIcon color="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;
