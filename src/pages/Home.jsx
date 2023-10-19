import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';

const id = "eddyfu";

function Home() {
    return (
        <div className="App">
          <h2>Home</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>

          <Link to={`/users/${id}`} >users</Link>
        </div>
    );
}

export {Home};