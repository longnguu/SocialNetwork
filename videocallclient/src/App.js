import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {publicRoute,privateRoute} from "./route";
import {Fragment} from "react";
import Navbar from "./component/navbar";

function App() {
  return (
    <Router>
      <Routes>
          {publicRoute.map((route, index) => {
              const Layout = route.layout === null? Fragment :Fragment;
              const Page = route.component;
              return (
                  <Route
                      key={index}
                      path={route.path}
                      element={
                          <Navbar/>
                      }
                  />
              );
          })}
      </Routes>
    </Router>
  );
}

export default App;
