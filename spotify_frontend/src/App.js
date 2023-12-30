import './output.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginComponent from './routes/login';
function App() {
  return (
   <div className='w-screen h-screen'>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginComponent/>}>
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
