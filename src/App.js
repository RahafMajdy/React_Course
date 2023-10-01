import './App.css';
import Header from './header';
import Main from './Main';
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>    

    <BrowserRouter>
      <Routes>
        <Route exact path= "/" Component={Main}></Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
