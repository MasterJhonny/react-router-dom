import React from "react";

import { Link, Routes, Route } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';

function About() {

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <div className="App">
      <h2>About</h2>
      <p>This is About, lorem ipsum dolor sit amet, consectetur adip</p>
      <Link to="data">Data</Link>
      <p>otro parrafo!</p>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to={''}>
            data
          </Link>
          <Link
            underline="hover"
            color="inherit"
            to={'faker'}
          >
            faker
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            to={'otro'}
            aria-current="page"
          >
            otro
          </Link>
        </Breadcrumbs>
      </div>
      <Routes>
        <Route path="" element={<h3>este es una prueba de data</h3>} />
        <Route path="faker" element={<h3>este es una faker</h3>} />
        <Route path="otro" element={<h3>este es una test otro!</h3>} />
      </Routes>
    </div>
  );
}

export { About };
