import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TravelContextProvider from './contexts/TravelContext';
import Home from './views/Home';
import Products from './views/Products';
import Services from './views/Services';
import SignUp from './views/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <TravelContextProvider>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/services"><Services /></Route>
            <Route path="/products"><Products /></Route>
            <Route path="/sign-up"><SignUp /></Route>
          </Switch>
        </TravelContextProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
