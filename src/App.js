import { useState, useEffect } from 'react'
import { Route , Router, Routes} from 'react-router-dom';
import LayoutApp from './components/Layout';
import Dashboard from './pages/Dashboard';
import TransactionPage from './pages/TransactionPage';

function App() {

 
  return (

    <LayoutApp
      ContentChild={

          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/transaction' element={<TransactionPage/>}/>
          </Routes>

      } />



  );
}

export default App;
