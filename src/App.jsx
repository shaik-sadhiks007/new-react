// importing means on which location this function is available and make sure export default is available in the component

import Welcome from './component/Welcome'
import Counter from './component/Counter';
import Todos from './component/Todos';

// while importing the css we have to give the path only no need of export or function name
import './App.css'

// function name should start with capital letter
function App() {


  // js above of the return keyword

  let name = 'sadhik';


  return (
    <div>
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>
        hello {name}, welcome
      </h1>

      <p className='ptag'>
        how r u ?
      </p>

      {/* welcome() */}

      {/* // function call in the html */}

      <Welcome />

      <Counter/>

      <Todos />

      



      {/* // while calling the function please use the callback function */}

    </div>
  )
}

export default App
