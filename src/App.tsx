import { Route, Routes } from 'react-router-dom';
import './globals.css';
import ResetPassword from './auth/ResetPassword';
import Resetinstruction from './auth/Resetinstruction';
 
 const App = () => {
   return (
     <main className='flex h-screen w-full items-center justify-center'>
      <Routes>
      <Route path="/" element={<ResetPassword />}/>
          <Route path="/successful" element={<Resetinstruction />}/>
      </Routes>
     </main>
   );
 }
 
 export default App;
 
