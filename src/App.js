import logo from './logo.svg';
import './App.css';
import Book from './Components/Book/Book';
import { Route, Routes } from 'react-router';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/waitinglist' element={<Book></Book>}></Route>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
      </Routes>
 
    </div>
  );
}

export default App;
