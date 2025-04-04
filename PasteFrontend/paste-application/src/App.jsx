import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/HomePage';
import NavBar from './components/navBar';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import AboutUs from './components/AboutUs';

function App() {
  
  const router = createBrowserRouter(
    [
      {path: "/",
        element: 
        <div className='home'>
          <NavBar/>
          <HomePage/>
        </div>
      },
      {path: "/pastes",
        element: 
        <div className='pastes'>
          <NavBar/>
          <Paste/>
        </div>
      },
      {path: "/pastes/:pasteId",
        element: 
        <div className='paste'>
          <NavBar/>
          <ViewPaste/>
        </div>
      },
      {path: "/about-us",
        element: 
        <div className='about'>
          <NavBar/>
          <AboutUs/>
        </div>
      },
    ]
  );

  return (
      <RouterProvider router={router}/>
  )
}

export default App
