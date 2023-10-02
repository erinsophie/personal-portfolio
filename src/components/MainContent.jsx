import { Outlet } from 'react-router-dom';
import Links from './Links';

function MainContent() {
  return (
    <div className="w-[350px] md:w-[600px] lg:w-[700px] mx-auto">
      <Outlet />
      <Links />
    </div>
  );
}

export default MainContent;
