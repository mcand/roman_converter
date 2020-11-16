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
      setDecimalNumber(result);
    } catch (error) {
      setDecimalError(error.message);
    }
  }

  const handleDecimalNumber = () => {
    try {
      const result = RomanNumerals.toRoman(parseInt(decimalNumber));
      setRomanNumber(result);
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
            helperText={decimalError}
            error={hasDecimalError()}
            value={romanNumber}
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
            helperText={romanError}
            error={hasRomanError()}
            value={decimalNumber}
          />
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<TranslateIcon />}
            onClick={handleDecimalNumber}
            value={decimalNumber}
          >
            Convert
          </Button>
        </NumberType>
      </Container>
    </>
  )
}

export default RomanNumberConverter