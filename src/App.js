import './App.css';
import Carros from './Carros';
import View from './Carros/view';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Carros/menu';
import { Container } from 'react-bootstrap';

const Sobre = () => {
  return (
    <h1>Essa é a página Sobre</h1>
  );
}

const App = () => {
  
  let routes = useRoutes([
    {path: "/", element: <Carros/>},
    {path: "sobre", element: <Sobre/>},
    {path: "view/:id", element: <View/>},
  ]);

  return routes;
};

const AppWrapper  = () => {
  return(
    <Router>
      <Menu></Menu>
      <Container>
        <App/>
      </Container>
    </Router>
  );
}

export default AppWrapper;