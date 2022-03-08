import logo from './logo.svg';
import './App.css';

function Header(props) {
  
  
  return (
    <div className="App">
      <h1>Hiiiiii....... {props.name} {props.age}</h1>
    </div>
  );
}

export default Header;
