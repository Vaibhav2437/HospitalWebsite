import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Pages/Home';
import Footer from './Component/Pages/Footer.jsx';
import About from './Component/Pages/About.jsx';
import Departments from './Component/Pages/Departments.jsx';
import Doctors from './Component/Pages/Doctors.jsx';
import Contact from './Component/Pages/Contact.jsx';
import Appointment from './Component/Pages/Appointment.jsx';
import PatientAppointment from './Component/Pages/PatientAppointment.jsx';
import Delete from './Component/Pages/Delete.jsx';
import EditData from './Component/Pages/EditData.jsx';
import PatientLogin from './Component/Pages/PatientLogin.jsx';
import Admin from './Component/Pages/Admin.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/departments' element={<Departments/>}></Route>
          <Route path='/doctors' element={<Doctors/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path= '/appointment'element={<Appointment/>}></Route>
          <Route path='/patientappointment' element={<PatientAppointment/>}></Route>
          <Route path='/appointment/edit/:userID' element={<EditData/>}></Route>
          <Route path='/appointemnt/delete/:userID' element={<Delete/>}></Route>
          <Route path='/login' element={<PatientLogin/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>  
    

    </div>
  );
}

export default App;
