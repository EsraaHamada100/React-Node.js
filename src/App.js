import Header from './shared/Header';
import Footer from './shared/Footer';
import './style/App.css';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      {/* This means I will send you the rest but make the header and footer appear in all
      pages */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
