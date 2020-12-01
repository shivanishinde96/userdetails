import React from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UsersList from './components/UsersList';
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading';
import Home from './components/Home'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <div className='App'>
      <GlobalProvider>
    <Router>
      <Heading/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/adduser' component={AddUser}/>
        <Route path='/edituser/:id' component={EditUser}/>
        <Route path='/userslist' component={UsersList}/>
      </Switch>
    </Router>
    </GlobalProvider>
    </div>
  );
}

export default App;
