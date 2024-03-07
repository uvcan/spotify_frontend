import './output.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginComponent from './routes/login';
import SignupComponent from './routes/signup';
import HomeComponent from './routes/homeComponent';
function App() {
  return (
   <div className='w-screen h-screen font-poppins'>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/signup' element={<SignupComponent/>}/>
        <Route path='/home' element={<HomeComponent/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
