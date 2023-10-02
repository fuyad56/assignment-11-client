import React, { Fragment, createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Products from './Components/Products/Products/Products';
import ProductDetails from './Components/Products/ProductDetails/ProductDetails';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/dashboard" element={loggedInUser.email ? <Dashboard /> : <Login />} />
            <Route path="/dashboard/:components" element={loggedInUser.email ? <Dashboard /> : <Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Fragment>
      </Router>
    </UserContext.Provider>
  );
};

export default App;