import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  console.log('ejecutar : json-server db.json --port 4000');
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/producto/nuevo" component={NuevoProducto} />
            <Route exact path="/producto/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
