import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from '../views/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;