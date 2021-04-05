import './App.css';
import './pages/Home';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import { Route, Switch } from 'react-router-dom';
import About from './pages/Aboutus';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Account from './pages/Account';
import Allcategories from './pages/Allcategories';
import Products from './pages/Products';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/category' component={Allcategories} />
          <Route exact path='/product' component={Products} />
          <Route component={Error} />
        </Switch>
      </AuthProvider>
      <Footer />
    </>
  );
}

export default App;
