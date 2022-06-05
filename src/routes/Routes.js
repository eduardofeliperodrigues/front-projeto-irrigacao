import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import CreatePerfil from '../views/CreatePerfil';
import Home from '../views/Home';
import ListLastIrrigations from '../views/ListLastIrrigations';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePerfil />} />
        <Route path="/irrigations" element={<ListLastIrrigations />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;