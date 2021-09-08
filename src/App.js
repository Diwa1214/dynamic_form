import logo from './logo.svg';
import './App.css';
import StudentForm from './Component/StudentForm';
import {Route,BrowserRouter} from "react-router-dom"
import SuccessSubmit from './Component/SuccessSubmit';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path="/" component ={StudentForm} exact></Route>
            <Route path="/edit" component ={StudentForm} exact></Route>
            <Route path ="/SuccessSubmit" component ={SuccessSubmit}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
