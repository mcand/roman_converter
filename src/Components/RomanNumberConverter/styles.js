import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const NumberType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  &input {
    margin-right: 40px;
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