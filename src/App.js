
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route,Routes} from"react-router-dom";
import ProductListing from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <div className="App">
      console.log('hi')
      <Header/>
      <Router>
      
<Routes>
<Route path='/'  element={<ProductListing/>}  />
<Route  path="/product/:productId" element={<ProductDetail/>} />
<Route>404 Not found</Route>

</Routes>

      </Router>
    </div>  
  );
}

export default App;
