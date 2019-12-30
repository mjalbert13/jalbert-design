import React,{ Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from './routes/Routes';
import Navbar from './components/NavBar'; 
import Landing from './pages/Landing';

import './App.css';

function App() {
  return (
   <Router>
     <Fragment>
      <Navbar />
       <Switch>
        <Route exact path='/' component={Landing} />
        <Route component={Routes}/>
       </Switch>
     </Fragment>
   </Router>
  );
}

export default App;
