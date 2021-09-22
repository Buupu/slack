import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <Box>
      <Header />
      <Router>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
