import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Resources from './routes/resources/resources.component';
import Dates from './routes/dates/dates.component';
import Practice from './routes/practice/practice.component';
import Changelog from './routes/changelog/changelog.component';

import FlavorTextGrid from './components/flavor-text-grid/flavor-text-grid.component';
import EmailFooter from './components/email-footer/email-footer.component';
import NavBar from './components/nav-bar/nav-bar.component';
import Banner from './components/banner/banner.component';

const App = () => {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="practice" element={<Practice />} />
        <Route path="dates" element={<Dates />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<About />} />
      </Routes>    
      <FlavorTextGrid />
      <EmailFooter />
    </>
  );
}

export default App;
