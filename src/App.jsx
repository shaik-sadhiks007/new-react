// importing means on which location this function is available and make sure export default is available in the component

import Welcome from "./component/Welcome";
import Counter from "./component/Counter";
import Todos from "./component/Todos";
import Header from "./component/Header";
import ProductDetail from "./component/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// while importing the css we have to give the path only no need of export or function name
import "./App.css";
import Products from "./component/Products";
import ApiTodos from "./component/ApiTodos";
import Register from "./component/Register";
import Login from "./component/Login";

import { useState } from "react";
import { createContext } from "react";
// function name should start with capital letter

export let studentContext = createContext();

function App() {
  // js above of the return keyword

  let name = "sadhik";

  let [age, setAge] = useState(70);

  function handleAge() {
    setAge(age + 1);
  }

  return (
    <div>
      {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}>
        hello {name}, welcome
      </h1>

      <p className='ptag'>
        how r u ?
      </p> */}

      {/* welcome() */}

      {/* // function call in the html */}

      {/* 

      <Welcome />

      <Counter/>

      <Todos /> */}

      <BrowserRouter>
        <Header />

        <studentContext.Provider value={{ name, age, handleAge }}>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/todos" element={<Todos />} />

            <Route path="/counter" element={<Counter />} />

            <Route path="/products" element={<Products />} />

            <Route path="/products/:id" element={<ProductDetail />} />

            <Route path="/apiTodos" element={<ApiTodos />} />

            <Route path="/register" element={<Register />} />
          </Routes>
        </studentContext.Provider>
      </BrowserRouter>

      {/* // while calling the function please use the callback function */}
    </div>
  );
}

export default App;
