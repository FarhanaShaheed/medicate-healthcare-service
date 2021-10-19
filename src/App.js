import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import ViewDetails from './Pages/ViewDetails/ViewDetails/ViewDetails';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import SignUp from './Pages/SignUp/SignUp';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
         <Switch>
           <Route exact path="/">
              <Home></Home>
           </Route>
           <Route path="/home">
              <Home></Home>
           </Route>
           <PrivateRoute path="/viewdetails/:serviceId">
             <ViewDetails></ViewDetails>
           </PrivateRoute>
           <Route path="/aboutus">
             <AboutUs></AboutUs>
           </Route>
           <Route path="/contacts">
             <Contacts></Contacts>
           </Route>
           <Route path="/login">
             <Login></Login>
           </Route>
           <Route path="/signup">
             <SignUp></SignUp>
           </Route>
           <Route path="*">
              <NotFound></NotFound>
           </Route>
         </Switch>
         <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
