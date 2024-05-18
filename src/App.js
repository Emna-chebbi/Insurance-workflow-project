import { Navigate, useRoutes } from 'react-router-dom';
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


function App() {
  let router = useRoutes([
    { path: '/', element: <Products /> },
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '/basket', element: <Basket /> },
    { path: '/insurance', element: <Insurance /> },
    { path: '/claims', element: <Claims /> },
    { path: '/contact', element: <Contact /> },
    { path: '/chatbot', element: <Chatbot /> },
    { path: '*', element: <Navigate to={'/'} /> },

  ])
  return (
    <ContextProvider>
      <ContextFilter>
        <Header />
        <Chatbot />
        {router}
      </ContextFilter>
    </ContextProvider>
  );
}

export default App;
