import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Pet from './pet';
// import SearchParams from './SearchParams';
// import Count from "./count";
// import FirstSection from './portfolio';
// import SecondSection from './portfolio_section2';
// import ValidatedLoginForm from './store-mangement/login'

import App from "./App";

// import FiltreSearch from "./store-mangement/components/filtreSearch_products";
function RootComponent() {
  return (
    <Router>
      <App />
      {/* <Pet name="Momo" animal="Cat" breed="Stray"/> */}
      {/* <SearchParams/>
        <Count/> */}
      {/* <FirstSection/>
        <SecondSection/> */}
      {/* <ValidatedLoginForm/> */}

      {/* <LoginPage /> */}
      {/* ======================== */}

      {/* <FiltreSearch /> */}
    </Router>
  );
}

export default RootComponent;
