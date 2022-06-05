import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import CreatePerfil from '../views/CreatePerfil';
import Home from '../views/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePerfil />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;