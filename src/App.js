import { useState, useEffect } from 'react'
import { Route , Router, Routes} from 'react-router-dom';
import Api from './api/api';
import LayoutApp from './components/Layout';
import Dashboard from './pages/Dashboard';
import TransactionPage from './pages/TransactionPage';

function App() {

  useEffect(()=>{
    const api = new Api({
      host:"localhost",
      port:5000
    })

  },[])

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
