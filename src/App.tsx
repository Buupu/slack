import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import Header from './components/Header';
import SideNav from './components/SideNav';

function App() {
  return (
    <Flex direction="column" h="100vh" w="full">
      <Header />
      <Flex flex={1}>
        <SideNav />
        <Router>
          <Switch>
            <Route path="/"></Route>
          </Switch>
        </Router>
      </Flex>
    </Flex>
  );
}

export default App;
