import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TranslateIcon from '@material-ui/icons/Translate';
import { NumberType, useStyles} from './styles';
import RomanNumerals from '../../Services/RomanNumerals';

const RomanNumberConverter = () => {
  const classes = useStyles();
  const [romanNumber, setRomanNumber] = useState('');
  const [decimalNumber, setDecimalNumber] = useState('');
  const [romanError, setRomanError] = useState('');
  const [decimalError, setDecimalError] = useState('');
  const romanTextField = React.createRef();
  const decimalTextField = React.createRef();

  const handleRomanNumberChange = (event) => {
    setDecimalError(false)
    setRomanNumber(event.target.value);
  }

  const handleDecimalNumberChange = (event) => {
    setRomanError(false)
    setDecimalNumber(event.target.value);
  }

  const hasRomanError = () => {
    if (romanError) {
      return true
    }
  }

  const hasDecimalError = () => {
    if (decimalError) {
      return true
    } 
  }

  const handleRomanNumber = () => {
    try {
      const result = RomanNumerals.fromRoman(romanNumber);
      decimalTextField.current.value = result;
    } catch (error) {
      setDecimalError(error.message);
    }

  }

  const handleDecimalNumber = () => {
    try {
      const result = RomanNumerals.toRoman(parseInt(decimalNumber));
      romanTextField.current.value = result;
    } catch (error) {
      setRomanError(error.message);
    }

  }

  return (
    <>
      <Container maxWidth="xs" className={classes.root}>
        <h2 className={classes.titleName}>Roman Number Converter</h2>
        <NumberType>
          <TextField
            id="roman-number"
            placeholder="Roman Number"
            onChange={handleRomanNumberChange}
            inputRef={romanTextField}
            helperText={decimalError}
            error={hasDecimalError()}
          />
        
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<TranslateIcon />}
            onClick={handleRomanNumber}
          >
            Convert
          </Button>
        </NumberType>
        <NumberType>
          <TextField
            id="decimal-number"
            placeholder="Decimal Number"
            onChange={handleDecimalNumberChange}
            inputRef={decimalTextField}
            helperText={romanError}
            error={hasRomanError()}
          />
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<TranslateIcon />}
            onClick={handleDecimalNumber}
          >
            Convert
          </Button>
        </NumberType>
      </Container>
    </>
  )
}

export default RomanNumberConverter