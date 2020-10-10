import React, { useEffect, useState } from 'react';
import { ContextStateProvider } from 'dynamic-context-provider'
import './App.css';
// import GeicoTemplate from './Components/GeicoTemplate';
import { Home } from './pages/Home';
import Toaster from './Components/Toaster';

const emptyAccount = {
  name: 'Absalon Darnell Berrian',
  street: '618 NW 13TH ST',
  aptBldgNum: 'APT 27',  
  city: 'BOCA RATON',
  state: 'FL',
  zipcode: 33486,
  year: 2017,
  make: 'FORD',
  model: 'MUSTANG',
  vin: '1FA6P8TH8H5307376',
  effectiveDate: '05-17-20',
  policyNumber: '6200-86-06-96/01388',
}
const globalStates = {
  toaster: {}
}
function AppRouter() {  
  const [initialError, setinitialError] = useState(false)
  const [isloading, setisloading] = useState(true)
  const [accountInfo, setaccountInfo] = useState(emptyAccount)
  async function getAccountInfo(){
    let accountInfo = emptyAccount
    try{
      setaccountInfo(accountInfo)
    }catch(e){
      setinitialError({e})
    }
    setisloading(false)
  }
  useEffect(() => {
    getAccountInfo()
  }, [])

  if(isloading){
    return(<div />)
  }
  return (
    <div>
       <ContextStateProvider stateConfig={{...accountInfo,...globalStates, }}>
         <Home />
        {/* <GeicoTemplate /> */}
       <Toaster initialError={initialError}/>
      </ContextStateProvider>
    </div>
  );
}
function App() {
  return (<AppRouter />);
}

export default App;
