import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const NumberType = styled.div`
  padding: 20px;
  input {
    margin-right: 20px;
  }
  button {
    float: right;
  }
`;

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  titleName: {
    textAlign: 'center',
    fontSize: 30,
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20,
  },
}));