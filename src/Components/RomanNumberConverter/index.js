import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TranslateIcon from '@material-ui/icons/Translate';
import { NumberType, useStyles} from './styles';

const RomanNumberConverter = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xs" className={classes.root}>
        <h2 className={classes.titleName}>Roman Number Converter</h2>
        <NumberType>
          <TextField id="standard-basic" label="Roman Number" />
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<TranslateIcon />}
          >
            Convert
          </Button>
        </NumberType>
        <NumberType>
          <TextField id="standard-basic" label="Decimal Number" />
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<TranslateIcon />}
          >
            Convert
          </Button>
        </NumberType>
      </Container>
    </>
  )
}

export default RomanNumberConverter