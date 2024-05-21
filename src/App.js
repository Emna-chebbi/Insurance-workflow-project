import React from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import Basket from './components/Basket/Basket';
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Details from './components/Details/Details';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Insurance from './components/Insurance/Insurance';
import Claims from './components/Claims/Claims';
import Contact from './components/Contact/Contact';
import Chatbot from './components/Chatbot/Chatbot';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/signin';

  const router = useRoutes([
    { path: '/', element: <Navigate to="/signup" /> }, 
    { path: '/products', element: <Products /> }, 
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '/basket', element: <Basket /> },
    { path: '/insurance', element: <Insurance /> },
    { path: '/claims', element: <Claims /> },
    { path: '/contact', element: <Contact /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/signin', element: <SignIn /> },
    { path: '*', element: <Navigate to={'/Products'} /> },
  ]);

  return (
    <ContextProvider>
      <ContextFilter>
        {!isAuthPage && <Header />}
        {!isAuthPage && <Chatbot />}
        {router}
      </ContextFilter>
    </ContextProvider>
  );
}

export default App;
