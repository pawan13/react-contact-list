import './App.css';
import Inputs from './components/Inputs';
import Title from './components/Title';

function App() {    
  return (
    <div className="wrapper">
    <div className="container">
      {/* <!-- title --> */}
     <Title/>

      {/* <!-- search and filter --> */}
      <Inputs/>

    
    </div>
  </div>
  );
}

export default App;
