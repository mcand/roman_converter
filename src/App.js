import React from 'react';
import Menu from './Components/Menu'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Menu brand='Optiopay Test' />
      <Container>
      </Container>
    </>
  )
}

export default App;