import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
