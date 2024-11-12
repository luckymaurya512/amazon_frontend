import React, { createContext,useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import SignIn from './components/SignIn';
import SideBar from './components/SideBar';
import Body from './components/Body';
import Cart from './components/Cart';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";


const ThemeContext = createContext();

const appRouter = createBrowserRouter([{
  path: "/",
  element:<Body/>,
},
{
  path: "/signin",
  element:<SignIn/>,
},
{
  path: "/cart",
  element:<Cart/>,
}]);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = (open) => {
    setSidebarOpen(open);
  };

  const closeSidebar = (open) => {
    setSidebarOpen(open);
  };

  return (
    <div className="App">
      {/* <BrowserRouter> */}

      <Navbar onSidebarToggle={handleSidebarToggle} />
      <RouterProvider router={appRouter}/>
      
      <SideBar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
export { ThemeContext };