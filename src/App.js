import { useEffect, useReducer } from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import './App.css';
import GetStartedPage from './BusinessModels/GetStartedPage/GetStartedPage';
import StoreVisit from './BusinessModels/StoreVisit/StoreVisit';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import UserContext from './Components/Services/UserContext';
import Constants from "./Constants/Constants";
import history from './History';
import AdminPanel from './BusinessModels/AdminPanel/AdminPanel';
import StoreDetail from './BusinessModels/StoreDetail/StoreDetail';




const initialState = {
  name: "Guest",
  loggedIn: false,
  modelOpen: false,
  firstName: '',
  lastName: '',
  email: '',
  imageUrl: '',
  path: '/'
};

const reducer = (state, action) => {
  switch (action.type) {
    case Constants.LOGIN_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        loggedIn: action.payload.loggedIn,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        imageUrl: action.payload.imageUrl,
        modelOpen: false,
        path: action.payload.path,
      };
    case Constants.LOGIN_FAILURE:
      return {
        ...state,
        name: action.payload.name,
        loggedIn: action.payload.loggedIn,
        modelOpen: false,
        path: Constants.HOME,
      };
    case Constants.MODEL_TOGGLE:
      return {
        ...state,
        modelOpen: action.payload.modelOpen,
      };
    default:
      return {
        ...state,
        name: action.payload.name,
        loggedIn: action.payload.loggedIn,
      };
  }
};



function App() {
  const [userProfile, dispatch] = useReducer(reducer, initialState);

  if (userProfile.loggedIn) {
    localStorage.setItem('userDetail', userProfile);
  }

  useEffect(() => {
    userProfile.loggedIn ? history.push(userProfile.path) : history.push("/");

  }, [userProfile.loggedIn, userProfile.path])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>

      <UserContext.Provider value={{ userProfile, dispatch }}>
        <Router history={history}>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Onboard" component={GetStartedPage}></Route>
            <Route exact path="/storeView" component={AdminPanel}></Route>
            <Route exact path="/storeDetail" component={StoreDetail}></Route>
          </Switch>

          <Footer></Footer>
          <Redirect to="/" />
        </Router>
      </UserContext.Provider>

    </div>

  )
}

export default App;
