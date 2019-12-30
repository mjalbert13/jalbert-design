import React,{ Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from './routes/Routes';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <Router>
     <Fragment>

       <Switch>
         <Route component={Routes}/>
       </Switch>
     </Fragment>
   </Router>
  );
}

export default App;
