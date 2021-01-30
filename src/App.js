import React, { useEffect, useState } from 'react';
import { ContextStateProvider } from 'dynamic-context-provider'
import './App.css';
import Home from './pages/Home';
import Toaster from './Components/Toaster';
import CoreDialog from './Components/CoreDialog';

const emptyAccount = {
  name: '',
  street: '123 NW 23TH ST',
  aptBldgNum: 'APT 14',  
  city: 'Townsville',
  state: 'GA',
  zipcode: 12344,
  year: 2020,
  make: 'FORD',
  model: 'MUSTANG',
  vin: '4444P8TTHH5223333',
  effectiveDate: '05-17-20',
  policyNumber: '6280-86-16-36/22288',
  insurance: 'geico'
}
const globalStates = {
  toaster: {},
  dialog: {title:'', style:{}, open: false, content: ()=>null},
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
       <Toaster initialError={initialError}/>
       <CoreDialog />
      </ContextStateProvider>
    </div>
  );
}
function App() {
  return (<AppRouter />);
}

export default App;
