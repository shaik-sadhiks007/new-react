// importing means on which location this function is available and make sure export default is available in the component

import Welcome from './component/Welcome'
import Counter from './component/Counter';
import Todos from './component/Todos';
import Header from './component/Header';
import ProductDetail from './component/ProductDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// while importing the css we have to give the path only no need of export or function name
import './App.css'
import Products from './component/Products';
import ApiTodos from './component/ApiTodos';

// function name should start with capital letter
function App() {


  // js above of the return keyword

  let name = 'sadhik';


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


        <Routes>

          <Route path='/' element={<Welcome />} />

          <Route path='/todos' element={<Todos />} />

          <Route path='/counter' element={<Counter />} />

          <Route path='/products' element={<Products />} />

          <Route path='/products/:id' element={<ProductDetail />} />

          <Route path='/apiTodos' element={<ApiTodos />} />






        </Routes>

      </BrowserRouter>



      {/* // while calling the function please use the callback function */}

    </div>
  )
}

export default App
