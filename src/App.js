import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <header>
 <Navbar dark color="primary">
 <div className="container">
 <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
 <div>Aluno: Fulano de Tal</div>
 </div>
 </Navbar>
 <Menu />
      </header>
    </div>
  );
}

export default App;
