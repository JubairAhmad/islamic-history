import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Services from './component/Services/Services';
import Home from './component/Home/Home';
import About from './component/About/About';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './component/SignUp/SignUp';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
     <Switch>

      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/services'>
        <Services></Services>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/signup'>
        <SignUp></SignUp>
      </Route>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
     </Switch>
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
