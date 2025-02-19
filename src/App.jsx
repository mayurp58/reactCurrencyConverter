import { useState, useRef } from 'react'
import InputFields from './components/InputFields'
import useCurrency from './components/hooks/useCurrency'

function App() {

  const inputValueRef = useRef();
  const fromCurrencyRef = useRef();
  const toCurrencyRef = useRef();
  const [defaultCurrency,setDefaultCurrency] = useState("usd");
  const currencyInfo = useCurrency(defaultCurrency);
  const [converted,setConverted] = useState(0);
  const currencyOptions = Object.keys(currencyInfo);

  const convertCurrency = ()=>
  {
    if(fromCurrencyRef.current.value!="" && toCurrencyRef.current.value!="" && inputValueRef.current.value!="")
    {
      let amount = inputValueRef.current.value
      setConverted(amount * currencyInfo[toCurrencyRef.current.value])
    }
    else
    {
      setConverted("Value's Must Be Set")
    }
    
  }


  return (
    <>
        <div className='h-screen bg-black w-full'>
          <div className='bg-black text-center align-items-center p-4'>
            <h1 className='text-amber-600 text-5xl'>Multi Currency Converter</h1>
          </div>
          <div className='bg-amber-100 mx-5 md:w-1/2 md:mx-auto p-3 rounded'>
              <InputFields 
                currencyOptions={currencyOptions}
                inputValueRef={inputValueRef}
                fromCurrencyRef={fromCurrencyRef}
                toCurrencyRef={toCurrencyRef}
                onCurrencyChange={(currency)=>setDefaultCurrency(currency)}

              />
              <div className='mt-5 text-center font-extrabold text-amber-700'>
                {converted}
            </div>
              <div className='my-4 items-center text-center w-1/2 mx-auto'>
                  <button onClick={convertCurrency} className='w-full md:w-1/2 mx-auto border-slate-900 p-2 rounded bg-amber-600 hover:bg-amber-800'>Convert</button>
              </div>
              
          </div>
          
        </div>
    </>
  )
}

export default App
