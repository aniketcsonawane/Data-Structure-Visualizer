import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { useState } from 'react';

function App() {
  var data_structures = ['Linked List','Stack','Queue','Tree'];
  const [nav,setNav] = useState('home');
  const [datastructure,setDatastructure] = useState('');

  return (
    <>
      <div className='main-container'> 
        <div className='w-100 h-100' >
          <Navbar setNav={setNav} nav={nav}/>
          <Body data_structures={data_structures} nav={nav} datastructure={datastructure} setDatastructure={setDatastructure}/>
        </div>
      </div>
    </>
  )
}

export default App
