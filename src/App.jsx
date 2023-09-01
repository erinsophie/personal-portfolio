import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="max-w-[800px] mx-auto flex flex-col h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
