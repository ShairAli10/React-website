import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Aboutus from './components/Aboutus';
import Machinelearn from './components/Services/Machinelearn';
import MobileApp from './components/Services/MobileApp';
import WebApp from './components/Services/WebApp';
import WatchApp from './components/Services/WatchApp';
import Contactusmain from './components/Contactusmain';
import Contactus from './components/Contactus';
import Uiux from './components/Services/Uiux';
import DigitalMarekting from './components/Services/DigitalMarketing';
import MobilePortfolio from './components/Portfolio/MobilePortfolio';
import WebPortfolio from './components/Portfolio/WebPortfolio';
import WatchOsPortfolio from './components/Portfolio/WatchOsPortfolio';
import MLPortfolio from './components/Portfolio/MLPortfolio';
import UIPortfolio from './components/Portfolio/UIPortfolio';
import Blogsmain from './components/Blogsmain';
import BlogPosts from './components/BlogPosts';
import ScrollTopButton from './Common_Views/ScrollTopButton/ScrollTopButton';

const App = () => {

  const removeSpecialChars = (str) => {
    return str.replace(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, '-');
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const withScrollToTop = (Component) => (props) => {
    const history = useHistory();
    const location = useLocation();

    const cleanedTitle = removeSpecialChars(decodeURIComponent(props.match.params.title));

    const handleClick = (path) => {
      if (path === location.pathname) {
        window.scrollTo(0, 0);
      } else {
        history.push(path);
      }
    };

    return (
      <React.Fragment>
        <ScrollToTop />
        <Component {...props} blogTitle={cleanedTitle} onClick={handleClick} />
      </React.Fragment>
    );
  };

  return (
    <div className="Content">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={withScrollToTop(Header)} />
          <Route exact path='/aboutus' component={withScrollToTop(Aboutus)} />
          <Route exact path='/services/machinelearn' component={withScrollToTop(Machinelearn)} />
          <Route exact path='/services/mobileapp' component={withScrollToTop(MobileApp)} />
          <Route exact path='/services/webapp' component={withScrollToTop(WebApp)} />
          <Route exact path='/services/watchapp' component={withScrollToTop(WatchApp)} />
          <Route exact path='/contactus' component={withScrollToTop(Contactus)} />
          <Route exact path='/contact' component={withScrollToTop(Contactusmain)} />
          <Route exact path='/services/uiux' component={withScrollToTop(Uiux)} />
          <Route exact path='/services/digitalmarketing' component={withScrollToTop(DigitalMarekting)} />
          <Route exact path='/portfolio/mobileportfolio' component={withScrollToTop(MobilePortfolio)} />
          <Route exact path='/portfolio/webportfolio' component={withScrollToTop(WebPortfolio)} />
          <Route exact path='/portfolio/watchportfolio' component={withScrollToTop(WatchOsPortfolio)} />
          <Route exact path='/portfolio/aiportfolio' component={withScrollToTop(MLPortfolio)} />
          <Route exact path='/portfolio/uiportfolio' component={withScrollToTop(UIPortfolio)} />
          <Route exact path='/blogs' component={withScrollToTop(Blogsmain)} />
          <Route exact path='/blogs/:title' component={withScrollToTop(BlogPosts)} />
        </Switch>
        <ScrollTopButton /> {/* Ensure this is outside the Switch component */}
      </Router>
    </div>
  );
}

export default App;
