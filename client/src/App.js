import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllJobs from './components/AllJobs';
import Homepage from './components/Homepage';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import Nav from './components/Nav';
import AddJob from './components/AddJob';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<RegistrationForm/>}/>
        <Route path='/Jobs' element={<AllJobs/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/new-job' element={<AddJob/>}/>

      </Routes>
    </div>
  )
}

export default App;
